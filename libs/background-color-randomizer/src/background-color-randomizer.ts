import { Injectable, Inject, Optional } from '@angular/core';
import { INTERVAL, TOTALTIME } from './background-color-randomizer.tokens';

@Injectable()
export class BackgroundColorRandomizer {
  private usedBgColors = {};

  constructor(
    @Inject(INTERVAL)
    @Optional()
    private interval?: number,
    @Inject(TOTALTIME)
    @Optional()
    private totalTime?: number
  ) {
    this.interval = interval || 1000;
    this.totalTime = totalTime || 10000;
  }

  public randomize(el: HTMLElement) {
    el.style['background-color'] = this.getRandomHexColor();
    const bgInterval = setInterval(() => {
      el.style['background-color'] = this.getRandomHexColor();
    }, this.interval);
    setTimeout(() => {
      clearInterval(bgInterval);
    }, this.totalTime - this.interval);
  }

  private getRandomHexColor() {
    let c = '#000000'.replace(/0/g, () => {
      // tslint:disable-next-line
      return (~~(Math.random() * 16)).toString(16);
    });
    while (this.usedBgColors[c] !== undefined) {
      c = this.getRandomHexColor();
    }
    this.usedBgColors[c] = true;
    return c;
  }
}
