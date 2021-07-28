import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceTotalComponent } from './attendance-total/attendance-total.component';
import { AttendanceByGovernorateComponent } from './attendance-by-governorate/attendance-by-governorate.component';
import { SharedModule } from 'src/app/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartistModule } from 'ng-chartist';
import { ChartModule } from 'angular2-chartjs';
import { UsMapModule } from 'angular-us-map';

const COMPONENTS = [
  AttendanceTotalComponent,
  AttendanceByGovernorateComponent
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ChartistModule,
    ChartModule,
    CommonModule,
    UsMapModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AttendanceWidgetsModule { }
