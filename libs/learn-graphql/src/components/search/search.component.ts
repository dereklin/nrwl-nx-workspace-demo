import { Component, OnInit, OnDestroy } from '@angular/core';
import { Link } from '../../types';
import { Subscription } from 'rxjs/Subscription';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../../services/auth.service';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { ALL_LINKS_SEARCH_QUERY } from '../../graphql';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public allLinks: Link[] = [];
  public loading: boolean = true;
  public searchText: string = '';

  public logged: boolean = false;

  public subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private authService: AuthService) {}

  public ngOnInit() {
    this.authService.isAuthenticated.pipe(distinctUntilChanged()).subscribe((isAuthenticated) => {
      this.logged = isAuthenticated;
    });
  }

  // 3
  public executeSearch() {
    if (!this.searchText) {
      return;
    }

    const querySubscription = this.apollo
      .watchQuery({
        query: ALL_LINKS_SEARCH_QUERY,
        variables: {
          searchText: this.searchText
        }
      })
      .valueChanges.pipe
      // take(1)
      ()
      .subscribe((response: any) => {
        this.allLinks = response.data.allLinks;
        this.loading = response.data.loading;
      });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
