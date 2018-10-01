import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingValueComponent } from './glowing-value.component';

describe('GlowingValueComponent', () => {
  let component: GlowingValueComponent;
  let fixture: ComponentFixture<GlowingValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlowingValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
