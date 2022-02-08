import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/enums/catergories.enum';

@Component({
  selector: 'app-category-balance-chart',
  templateUrl: './category-balance-chart.component.html',
  styleUrls: ['./category-balance-chart.component.scss'],
})
export class CategoryBalanceChartComponent implements OnInit {

  @Input() category: Categories;

  constructor() { }

  ngOnInit() {}

}
