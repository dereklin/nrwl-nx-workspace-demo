import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature3Component } from './feature3.component';
import { DropdownModule } from '@nrwl-nx-workspace-demo';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
  ],
  declarations: [Feature3Component],
  exports: []
})
export class Feature3Module {}
