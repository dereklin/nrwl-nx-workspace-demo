import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApolloGameComponent } from './apollo-game.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { schema } from './schema';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ApolloGameComponent }]),
    HttpClientModule,
    HttpLinkModule,
    ApolloModule
  ],
  declarations: [ApolloGameComponent, TeamCardComponent, SuccessComponent, ErrorComponent]
})
export class ApolloGameModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const local = withClientState(schema);
    const remoteHttpLink = httpLink.create({ uri: 'https://api.graph.cool/simple/v1/cjbl0bxmq04570186hqlvgpmg' });

    apollo.create({
      link: local.concat(remoteHttpLink),
      cache: new InMemoryCache()
    });
  }
}
