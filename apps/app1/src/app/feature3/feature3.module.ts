import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature3Component } from './feature3.component';
import { RouterModule } from '@angular/router';
import { BackgroundColorRandomizer } from '@nrwl-nx-workspace-demo/background-color-randomizer';
import { DropdownModule } from '@nrwl-nx-workspace-demo/dropdown';

@NgModule({
  imports: [CommonModule, DropdownModule, RouterModule],
  declarations: [Feature3Component],
  exports: [],
  providers: [BackgroundColorRandomizer]
})
export class Feature3Module {}
