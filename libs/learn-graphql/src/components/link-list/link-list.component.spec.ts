import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListComponent } from './link-list.component';
import { AuthService } from '../../services/auth.service';
import { Apollo } from 'apollo-angular';
import { ChangeDetectorRef } from '@angular/core';

describe('LinkListComponent', () => {
  let component: LinkListComponent;
  let fixture: ComponentFixture<LinkListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LinkListComponent],
        providers: [
          {provide: AuthService, useValue: {}},
          {provide: Apollo, useValue: {}},
          {provide: ChangeDetectorRef, useValue: {}}
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
