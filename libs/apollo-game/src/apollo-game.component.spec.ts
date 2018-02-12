import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloGameComponent } from './apollo-game.component';

describe('ApolloGameComponent', () => {
  let component: ApolloGameComponent;
  let fixture: ComponentFixture<ApolloGameComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ApolloGameComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
