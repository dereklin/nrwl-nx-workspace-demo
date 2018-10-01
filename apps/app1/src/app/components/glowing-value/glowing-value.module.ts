import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlowingValueComponent } from './glowing-value.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GlowingValueComponent],
  exports: [GlowingValueComponent]
})
export class GlowingValueModule {}
