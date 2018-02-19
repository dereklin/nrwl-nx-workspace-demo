import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinkComponent } from './create-link.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';
import { Apollo } from 'apollo-angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateLinkComponent', () => {
  let component: CreateLinkComponent;
  let fixture: ComponentFixture<CreateLinkComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CreateLinkComponent],
        imports: [RouterModule, RouterTestingModule],
        providers: [{ provide: AuthService, useValue: {} }, { provide: Apollo, useValue: {} }],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
