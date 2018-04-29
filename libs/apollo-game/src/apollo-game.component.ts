import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apollo-game',
  templateUrl: './apollo-game.component.html',
  styleUrls: ['./apollo-game.component.scss']
})
export class ApolloGameComponent implements OnInit {
  public games$: Observable<any>;
  public teamAScore = 1;
  public created = false;
  public error = false;

  public updateGame(event) {}

  public createGame() {}

  constructor(private apollo: Apollo) {}

  public ngOnInit() {
    const query = gql`
      query {
        allGames {
          id
          teamAName
          teamBName
          teamAScore
          teamBScore
        }
      }
    `;
    this.games$ = this.apollo.watchQuery({ query }).valueChanges.pipe(
      map(({ data }) => {
        return data;
      })
    );
  }
}
