/*
https://www.howtographql.com/angular-apollo/1-getting-started/
Simple API:        https://api.graph.cool/simple/v1/cjdjgmi0u2cye0129kgw4a1ug
Relay API:         https://api.graph.cool/relay/v1/cjdjgmi0u2cye0129kgw4a1ug
Subscriptions API: wss://subscriptions.graph.cool/v1/cjdjgmi0u2cye0129kgw4a1ug

*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LearnGraphqlComponent } from './learn-graphql.component';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';
import { LoginComponent } from './components/login/login.component';
import { LearnGraphqlRoutingModule } from './learn-graphql-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { GC_AUTH_TOKEN } from './constants';
import { SearchComponent } from './components/search/search.component';
import { getOperationAST } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink } from 'apollo-link';

@NgModule({
  imports: [CommonModule, HttpClientModule, ApolloModule, HttpLinkModule, FormsModule, LearnGraphqlRoutingModule],
  declarations: [
    LearnGraphqlComponent,
    LinkItemComponent,
    LinkListComponent,
    CreateLinkComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent
  ],
  providers: [AuthService]
})
export class LearnGraphqlModule {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    const token = localStorage.getItem(GC_AUTH_TOKEN);
    const authorization = token ? `Bearer ${token}` : null;
    const headers = new HttpHeaders();
    headers.append('Authorization', authorization);
    const uri = 'https://api.graph.cool/simple/v1/cjdjgmi0u2cye0129kgw4a1ug';
    const http = httpLink.create({ uri, headers });

    // 1
    const ws = new WebSocketLink({
      uri: `wss://subscriptions.graph.cool/v1/cjdjgmi0u2cye0129kgw4a1ug`,
      options: {
        reconnect: true,
        timeout: 30000,
        connectionParams: {
          authToken: localStorage.getItem(GC_AUTH_TOKEN),
        }
      }
    });

    apollo.create({
      // 2
      link: ApolloLink.split(
        // 3
        operation => {
          const operationAST = getOperationAST(operation.query, operation.operationName);
          return !!operationAST && operationAST.operation === 'subscription';
        },
        ws,
        http,
      ),
      // link: http,
      cache: new InMemoryCache()
    });
  }
}
