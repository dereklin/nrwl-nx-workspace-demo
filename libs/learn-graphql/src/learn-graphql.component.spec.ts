import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnGraphqlComponent } from './learn-graphql.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/auth.service';
import { of } from 'rxjs/observable/of';

describe('LearnGraphqlComponent', () => {
  let component: LearnGraphqlComponent;
  let fixture: ComponentFixture<LearnGraphqlComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          LearnGraphqlComponent,
          HeaderComponent
        ],
        imports: [
          RouterTestingModule
        ],
        providers: [
          {provide: AuthService, useValue: {
            isAuthenticated: of(true),
            autoLogin: () => {}
          }}
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
