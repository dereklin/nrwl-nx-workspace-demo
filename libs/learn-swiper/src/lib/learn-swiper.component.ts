import { Component, OnInit, ViewChild } from '@angular/core';
import * as Swiper from 'swiper';
import {
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
  SwiperComponent,
  SwiperDirective
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'learn-swiper',
  templateUrl: './learn-swiper.component.html',
  styleUrls: ['./learn-swiper.component.scss']
})
export class LearnSwiperComponent {
  public show: boolean = true;

  public slides = ['First slide', 'Second slide', 'Third slide', 'Fourth slide', 'Fifth slide', 'Sixth slide'];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) public componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) public directiveRef: SwiperDirective;

  constructor() {}

  public toggleType() {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled() {
    this.disabled = !this.disabled;
  }

  public toggleDirection() {
    this.config.direction = this.config.direction === 'horizontal' ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView() {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls() {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive') {
      this.directiveRef.setIndex(0);
    } else {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl() {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl() {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
}
