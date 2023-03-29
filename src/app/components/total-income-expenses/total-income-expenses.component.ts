import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-total-income-expenses',
  templateUrl: './total-income-expenses.component.html',
  styleUrls: ['./total-income-expenses.component.scss'],
})
export class TotalIncomeExpensesComponent implements OnInit {

  @Input() date
  @Input() account: Account

  constructor() { }

  ngOnInit() {}

}
