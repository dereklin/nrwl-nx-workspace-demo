import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component } from './feature1.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SparklinesModule } from '../components/sparklines/sparklines.module';

describe('Feature1Component', () => {
  let component: Feature1Component;
  let fixture: ComponentFixture<Feature1Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SparklinesModule],
        declarations: [Feature1Component],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
