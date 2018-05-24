import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkItemComponent } from './link-item.component';
import { Apollo } from 'apollo-angular';
import { Link } from '../../types';

describe('LinkItemComponent', () => {
  let component: LinkItemComponent;
  let fixture: ComponentFixture<LinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkItemComponent],
      providers: [{ provide: Apollo, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkItemComponent);
    component = fixture.componentInstance;
    component.link = { votes: [] } as Link;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
