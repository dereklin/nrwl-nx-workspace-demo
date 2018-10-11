import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
  imports: [CommonModule, ReportRoutingModule, MatCardModule],
  declarations: [ReportComponent]
})
export class ReportModule {}
