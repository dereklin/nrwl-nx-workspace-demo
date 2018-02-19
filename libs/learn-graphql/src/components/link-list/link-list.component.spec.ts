import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListComponent } from './link-list.component';
import { AuthService } from '../../services/auth.service';
import { Apollo } from 'apollo-angular';
import { ChangeDetectorRef } from '@angular/core';
import { LinkItemComponent } from '../../components/link-item/link-item.component';
import { of } from 'rxjs/observable/of';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LinkListComponent', () => {
  let component: LinkListComponent;
  let fixture: ComponentFixture<LinkListComponent>;
  let httpLink: HttpLink;
  let apollo: Apollo;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LinkListComponent, LinkItemComponent],
        imports: [HttpClientTestingModule],
        providers: [
          { provide: AuthService, useValue: { isAuthenticated: of(true) } },
          Apollo,
          { provide: ChangeDetectorRef, useValue: {} },
          HttpLink
        ]
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
