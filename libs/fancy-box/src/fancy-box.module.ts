import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyBoxComponent } from './fancy-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FancyBoxComponent],
  exports: [FancyBoxComponent]
})
export class FancyBoxModule {
}
