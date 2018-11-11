import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ElementsSandboxComponent } from './elements-sandbox.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ElementsSandboxComponent }])
  ],
  declarations: [ElementsSandboxComponent, PopupComponent],
  providers: [PopupService],
  entryComponents: [PopupComponent]
})
export class ElementsSandboxModule {}
