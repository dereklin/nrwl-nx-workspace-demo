import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearnSwiperComponent } from './learn-swiper.component';
import { LearnSwiperRoutingModule } from './learn-swiper-routing.module';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [CommonModule, SwiperModule, FlexLayoutModule, LearnSwiperRoutingModule],
  declarations: [LearnSwiperComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class LearnSwiperModule {}
