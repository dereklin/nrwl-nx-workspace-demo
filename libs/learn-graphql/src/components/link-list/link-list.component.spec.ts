import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { of } from 'rxjs/observable/of';

import { LinkItemComponent } from '../../components/link-item/link-item.component';
import { AuthService } from '../../services/auth.service';
import { LinkListComponent } from './link-list.component';

describe('LinkListComponent', () => {
  let component: LinkListComponent;
  let fixture: ComponentFixture<LinkListComponent>;
  let httpLink: HttpLink;
  let apollo: Apollo;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LinkListComponent, LinkItemComponent],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ],
        providers: [
          { provide: AuthService, useValue: { isAuthenticated: of(true) } },
          Apollo,
          { provide: ChangeDetectorRef, useValue: {} },
          HttpLink
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListComponent);
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
