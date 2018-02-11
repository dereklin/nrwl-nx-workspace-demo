import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApolloComponent } from './app-apollo.component';

describe('AppApolloComponent', () => {
  let component: AppApolloComponent;
  let fixture: ComponentFixture<AppApolloComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppApolloComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
