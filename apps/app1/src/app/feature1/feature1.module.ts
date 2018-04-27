import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { SparklinesModule } from '../components/sparklines/sparklines.module';

@NgModule({
  imports: [CommonModule, SparklinesModule],
  declarations: [Feature1Component]
})
export class Feature1Module {}
