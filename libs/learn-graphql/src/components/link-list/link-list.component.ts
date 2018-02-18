import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { ALL_LINKS_QUERY, NEW_LINKS_SUBSCRIPTION, NEW_VOTES_SUBSCRIPTION } from '../../graphql';
import { AuthService } from '../../services/auth.service';
import { Link } from '../../types';

/*
https://www.howtographql.com/angular-apollo/2-queries-loading-links/
*/
@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkListComponent implements OnInit, OnDestroy {
  public allLinks: Link[] = [];
  public loading = true;

  public isLoggedIn$: Observable<boolean>;

  public subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private cdf: ChangeDetectorRef, private authService: AuthService) {}

  public ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated.pipe(distinctUntilChanged());

    const allLinkQuery: QueryRef<any> = this.apollo.watchQuery({
      query: ALL_LINKS_QUERY
    });

    allLinkQuery
      .subscribeToMore({
        document: NEW_LINKS_SUBSCRIPTION,
        updateQuery: (previous: any, { subscriptionData }) => {
          const newAllLinks = [
            subscriptionData.data.Link.node,
            ...previous.allLinks
          ];
          return {
            ...previous,
            allLinks: newAllLinks
          };
        }
      });

    allLinkQuery
      .subscribeToMore({
        document: NEW_VOTES_SUBSCRIPTION,
        updateQuery: (previous: any, { subscriptionData }) => {
          const votedLinkIndex = previous.allLinks.findIndex(myLink =>
            myLink.id === subscriptionData.data.Vote.node.link.id);
          const link = subscriptionData.data.Vote.node.link;
          const newAllLinks = previous.allLinks.slice();
          newAllLinks[votedLinkIndex] = link;
          return {
            ...previous,
            allLinks: newAllLinks
          };
        }
      })
      ;

    const querySubscription = allLinkQuery.valueChanges.subscribe(response => {
      this.allLinks = response.data.allLinks;
      this.loading = response.loading;
      this.cdf.markForCheck();
    });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }

  public updateStoreAfterVote(store, createVote, linkId) {
    // 1
    const data = store.readQuery({
      query: ALL_LINKS_QUERY
    });

    // 2
    const votedLink = data.allLinks.find(link => link.id === linkId);
    votedLink.votes = createVote.link.votes;

    // 3
    store.writeQuery({ query: ALL_LINKS_QUERY, data });
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
