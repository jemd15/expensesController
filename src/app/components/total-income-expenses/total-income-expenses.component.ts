import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-income-expenses',
  templateUrl: './total-income-expenses.component.html',
  styleUrls: ['./total-income-expenses.component.scss'],
})
export class TotalIncomeExpensesComponent implements OnInit {

  @Input() date

  constructor() { }

  ngOnInit() {}

}
