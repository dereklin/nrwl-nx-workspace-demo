/*
https://www.howtographql.com/angular-apollo/2-queries-loading-links/
*/
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Link } from '../../types';
import { ALL_LINKS_QUERY, AllLinkQueryResponse } from '../../graphql';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  public allLinks: Link[] = [];
  public loading = true;

  constructor(private apollo: Apollo, private cdf: ChangeDetectorRef) {}

  ngOnInit() {
    // 4
    this.apollo
      .watchQuery({
        query: ALL_LINKS_QUERY
      })
      .valueChanges.subscribe((response: any) => {
        // 5
        this.allLinks = response.data.allLinks;
        this.loading = response.loading;
        this.cdf.markForCheck();
      });
  }
}
