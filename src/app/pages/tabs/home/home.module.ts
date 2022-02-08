import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CategoryTendencyChartComponent } from 'src/app/components/category-tendency-chart/category-tendency-chart.component';
import { IncomeExpensesChartComponent } from 'src/app/components/income-expenses-chart/income-expenses-chart.component';
import { IncomeExpensesListComponent } from 'src/app/components/income-expenses-list/income-expenses-list.component';
import { MonthlyChartComponent } from 'src/app/components/monthly-chart/monthly-chart.component';
import { HeaderWaveComponent } from 'src/app/components/header-wave/header-wave.component';
import { CategoryBalanceChartComponent } from 'src/app/components/category-balance-chart/category-balance-chart.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomePage,
    IncomeExpensesListComponent,
    CategoryTendencyChartComponent,
    IncomeExpensesChartComponent,
    MonthlyChartComponent,
    HeaderWaveComponent,
    CategoryBalanceChartComponent
  ]
})
export class HomePageModule {}
