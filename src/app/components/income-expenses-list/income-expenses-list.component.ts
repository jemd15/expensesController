import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-expenses-list',
  templateUrl: './income-expenses-list.component.html',
  styleUrls: ['./income-expenses-list.component.scss'],
})
export class IncomeExpensesListComponent implements OnInit {

  @Input() limit: number
  @Input() filter: string

  constructor() { }

  ngOnInit() {}

}
