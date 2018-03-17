import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnSwiperComponent } from './learn-swiper.component';

const routes: Routes = [
  {
    path: '',
    component: LearnSwiperComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnSwiperRoutingModule {}
