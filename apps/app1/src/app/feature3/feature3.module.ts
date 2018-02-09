import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature3Component } from './feature3.component';
import { DropdownModule } from '@nrwl-nx-workspace-demo';
import { BackgroundColorRandomizer } from '@nrwl-nx-workspace-demo';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DropdownModule, RouterModule],
  declarations: [Feature3Component],
  exports: [],
  providers: [BackgroundColorRandomizer]
})
export class Feature3Module {}
