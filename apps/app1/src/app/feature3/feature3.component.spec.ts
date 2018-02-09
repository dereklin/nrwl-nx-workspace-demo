import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component } from './feature3.component';
import { DropdownModule, BackgroundColorRandomizer } from '@nrwl-nx-workspace-demo';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('Feature3Component', () => {
  let component: Feature3Component;
  let fixture: ComponentFixture<Feature3Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DropdownModule, RouterTestingModule],
        declarations: [Feature3Component],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [BackgroundColorRandomizer]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
