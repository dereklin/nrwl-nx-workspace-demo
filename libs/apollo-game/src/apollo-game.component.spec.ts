import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloGameComponent } from './apollo-game.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApolloGameComponent', () => {
  let component: ApolloGameComponent;
  let fixture: ComponentFixture<ApolloGameComponent>;
  let httpLink: HttpLink;
  let apollo: Apollo;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ApolloGameComponent, TeamCardComponent, SuccessComponent, ErrorComponent],
        imports: [RouterTestingModule, HttpClientTestingModule],
        providers: [Apollo, HttpLink],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloGameComponent);
    component = fixture.componentInstance;
    apollo = TestBed.get(Apollo);
    httpLink = TestBed.get(HttpLink);
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:5000/graphql' }),
      cache: new InMemoryCache()
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
