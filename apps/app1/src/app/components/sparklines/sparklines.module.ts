import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparklinesComponent } from './sparklines.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SparklinesComponent],
  exports: [SparklinesComponent]
})
export class SparklinesModule {}
