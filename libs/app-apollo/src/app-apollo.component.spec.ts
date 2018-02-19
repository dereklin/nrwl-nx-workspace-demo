import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApolloComponent } from './app-apollo.component';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let httpLink: HttpLink;
let apollo: Apollo;

describe('AppApolloComponent', () => {
  let component: AppApolloComponent;
  let fixture: ComponentFixture<AppApolloComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppApolloComponent],
        imports: [HttpClientTestingModule],
        providers: [Apollo, HttpLink]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApolloComponent);
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
