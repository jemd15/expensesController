import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-income-expenses-chart',
  templateUrl: './income-expenses-chart.component.html',
  styleUrls: ['./income-expenses-chart.component.scss'],
})
export class IncomeExpensesChartComponent implements OnInit {

  @Input() account: Account

  constructor() { }

  ngOnInit() {}

}
