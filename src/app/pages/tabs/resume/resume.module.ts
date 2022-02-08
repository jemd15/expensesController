import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';

import { ResumePage } from './resume.page';
import { MonthlyChartComponent } from 'src/app/components/monthly-chart/monthly-chart.component';
import { IncomeExpensesChartComponent } from 'src/app/components/income-expenses-chart/income-expenses-chart.component';
import { CategoryTendencyChartComponent } from 'src/app/components/category-tendency-chart/category-tendency-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumePageRoutingModule
  ],
  declarations: [
    ResumePage,
    CategoryTendencyChartComponent,
    IncomeExpensesChartComponent,
    MonthlyChartComponent
  ]
})
export class ResumePageModule {}
