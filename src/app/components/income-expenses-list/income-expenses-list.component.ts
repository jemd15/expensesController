import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-expenses-list',
  templateUrl: './income-expenses-list.component.html',
  styleUrls: ['./income-expenses-list.component.scss'],
})
export class IncomeExpensesListComponent implements OnInit {

  @Input() date

  constructor() { }

  ngOnInit() {}
  
  ngOnChanges(date) {
    
  }

}
