import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map, combineLatest, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { ALL_LINKS_QUERY, NEW_LINKS_SUBSCRIPTION, NEW_VOTES_SUBSCRIPTION, AllLinkQueryResponse } from '../../graphql';
import { AuthService } from '../../services/auth.service';
import { Link } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { LINKS_PER_PAGE } from '../../constants';
import { ApolloQueryResult } from 'apollo-client';
import * as _ from 'lodash';

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
  public count = 0;

  public isLoggedIn$: Observable<boolean>;

  public subscriptions: Subscription[] = [];

  get orderedLinks(): Observable<Link[]> {
    return this.route.url.pipe(
      map(segments => segments.toString()),
      map(path => {
        if (path.includes('top')) {
          return _.orderBy(this.allLinks, 'votes.length').reverse();
        } else {
          return this.allLinks;
        }
      })
    );
  }
  get isFirstPage(): Observable<boolean> {
    return this.route.paramMap.pipe(
      map(params => {
        return parseInt(params.get('page'), 10);
      }),
      map(page => page === 1)
    );
  }

  get isNewPage(): Observable<boolean> {
    return this.route.url.pipe(map(segments => segments.toString()), map(path => path.includes('new')));
  }

  get pageNumber(): Observable<number> {
    return this.route.paramMap.pipe(
      map(params => {
        return parseInt(params.get('page'), 10);
      })
    );
  }

  get morePages(): Observable<boolean> {
    return this.pageNumber.pipe(map(pageNumber => pageNumber < this.count / this.linksPerPage));
  }

  private first$: Observable<number>;
  private skip$: Observable<number>;
  private orderBy$: Observable<string | null>;
  private linksPerPage = LINKS_PER_PAGE;

  constructor(
    private apollo: Apollo,
    private cdf: ChangeDetectorRef,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated.pipe(distinctUntilChanged());

    // 0
    const pageParams$: Observable<number> = this.route.paramMap.pipe(
      map(params => {
        return parseInt(params.get('page'), 10);
      })
    );

    // 1
    const path$: Observable<string> = this.route.url.pipe(map(segments => segments.toString()));

    // 2
    this.first$ = path$.pipe(
      map(path => {
        const isNewPage = path.includes('new');
        return isNewPage ? this.linksPerPage : 100;
      })
    );

    // 3
    this.skip$ = path$.pipe(
      combineLatest(pageParams$),
      map(([path, page]) => {
        const isNewPage = path.includes('new');
        return isNewPage ? (page - 1) * this.linksPerPage : 0;
      })
    );

    // 4
    this.orderBy$ = path$.pipe(
      map(path => {
        const isNewPage = path.includes('new');
        return isNewPage ? 'createdAt_DESC' : null;
      })
    );

    // 5
    const getQuery = (variables): Observable<ApolloQueryResult<AllLinkQueryResponse>> => {
      const query = this.apollo.watchQuery<AllLinkQueryResponse>({
        query: ALL_LINKS_QUERY,
        variables
      });

      query.subscribeToMore({
        document: NEW_LINKS_SUBSCRIPTION,
        updateQuery: (previous: any, { subscriptionData }) => {
          const newAllLinks = [subscriptionData.data.Link.node, ...previous.allLinks];
          return {
            ...previous,
            allLinks: newAllLinks
          };
        }
      });

      query.subscribeToMore({
        document: NEW_VOTES_SUBSCRIPTION,
        updateQuery: (previous: any, { subscriptionData }) => {
          const votedLinkIndex = previous.allLinks.findIndex(
            myLink => myLink.id === subscriptionData.data.Vote.node.link.id
          );
          const link = subscriptionData.data.Vote.node.link;
          const newAllLinks = previous.allLinks.slice();
          newAllLinks[votedLinkIndex] = link;
          return {
            ...previous,
            allLinks: newAllLinks
          };
        }
      });

      return query.valueChanges;
    };

    const allLinkQuery: Observable<ApolloQueryResult<AllLinkQueryResponse>> = this.first$.pipe(
      combineLatest(this.skip$, this.orderBy$, (first, skip, orderBy) => ({ first, skip, orderBy })),
      // 7
      switchMap((variables: any) => getQuery(variables))
    );
    // 6
    // const allLinkQuery: QueryRef<any> = this.apollo.watchQuery({
    //   query: ALL_LINKS_QUERY
    // });

    const querySubscription = allLinkQuery.subscribe(response => {
      this.allLinks = response.data.allLinks;
      this.count = response.data._allLinksMeta.count;
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

  public nextPage() {
    const page = parseInt(this.route.snapshot.params.page, 10);
    if (page < this.count / LINKS_PER_PAGE) {
      const nextPage = page + 1;
      // this.router.navigate([`./new/${nextPage}`], { relativeTo: this.route });
      this.router.navigate([`../${nextPage}`], { relativeTo: this.route });
    }
  }

  public previousPage() {
    const page = parseInt(this.route.snapshot.params.page, 10);
    if (page > 1) {
      const previousPage = page - 1;
      // this.router.navigate([`./new/${nextPage}`], { relativeTo: this.route });
      this.router.navigate([`../${previousPage}`], { relativeTo: this.route });
    }
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
