import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChartModule } from 'angular-highcharts';
import { CategoryBalanceChartComponent } from './category-balance-chart/category-balance-chart.component';
import { CategoryTendencyChartComponent } from './category-tendency-chart/category-tendency-chart.component';
import { HeaderWaveComponent } from './header-wave/header-wave.component';
import { IncomeExpensesChartComponent } from './income-expenses-chart/income-expenses-chart.component';
import { IncomeExpensesListComponent } from './income-expenses-list/income-expenses-list.component';
import { MonthlyChartComponent } from './monthly-chart/monthly-chart.component';
import { TotalIncomeExpensesComponent } from './total-income-expenses/total-income-expenses.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChartModule
  ],
  declarations: [
    IncomeExpensesListComponent,
    CategoryTendencyChartComponent,
    IncomeExpensesChartComponent,
    MonthlyChartComponent,
    HeaderWaveComponent,
    CategoryBalanceChartComponent,
    TotalIncomeExpensesComponent
  ],
  exports: [
    IncomeExpensesListComponent,
    CategoryTendencyChartComponent,
    IncomeExpensesChartComponent,
    MonthlyChartComponent,
    HeaderWaveComponent,
    CategoryBalanceChartComponent,
    TotalIncomeExpensesComponent
  ]
})
export class ComponentsModule {}