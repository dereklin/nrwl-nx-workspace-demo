import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClassToggleOnChangeComponent } from './class-toggle-on-change.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClassToggleOnChangeComponent],
  exports: [ClassToggleOnChangeComponent]
})
export class ClassToggleOnChangeModule {}
