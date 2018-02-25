import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSwiperComponent } from './learn-swiper.component';

describe('LearnSwiperComponent', () => {
  let component: LearnSwiperComponent;
  let fixture: ComponentFixture<LearnSwiperComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LearnSwiperComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
