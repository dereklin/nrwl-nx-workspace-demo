import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apollo',
  templateUrl: './app-apollo.component.html',
  styleUrls: ['./app-apollo.component.scss']
})
export class AppApolloComponent implements OnInit {
  public author$: Observable<any>;

  constructor(private apollo: Apollo) {}

  public ngOnInit() {
    const query = gql`
      query {
        author(firstName: "Edmond", lastName: "Jones") {
          firstName
          lastName
          posts {
            title
            views
          }
        }
      }
    `;
    this.author$ = this.apollo.query({ query }).pipe(
      map(obj => {
        return obj.data;
      })
    );
  }
}
