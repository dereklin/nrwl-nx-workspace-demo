import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSwiperComponent } from './learn-swiper.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CommonModule } from '@angular/common';
import { LearnSwiperRoutingModule } from './learn-swiper-routing.module';

describe('LearnSwiperComponent', () => {
  let component: LearnSwiperComponent;
  let fixture: ComponentFixture<LearnSwiperComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LearnSwiperComponent],
        imports: [FlexLayoutModule, SwiperModule, LearnSwiperRoutingModule, CommonModule]
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
