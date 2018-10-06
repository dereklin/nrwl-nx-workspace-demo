import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassToggleOnChangeModule } from '@nrwl-nx-workspace-demo/class-toggle-on-change';

import { CounterModule } from '../components/counter/counter.module';
import { GlowingValueModule } from '../components/glowing-value/glowing-value.module';
import { SparklinesModule } from '../components/sparklines/sparklines.module';
import { Feature1Component } from './feature1.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../effects/app.effects';

@NgModule({
  imports: [
    CommonModule,
    SparklinesModule,
    CounterModule,
    GlowingValueModule,
    ClassToggleOnChangeModule,
    EffectsModule.forFeature([AppEffects])
  ],
  declarations: [Feature1Component]
})
export class Feature1Module {}
