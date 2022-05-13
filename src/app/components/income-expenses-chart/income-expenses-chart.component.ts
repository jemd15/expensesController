import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Account } from 'src/app/models/account.model';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';

@Component({
  selector: 'app-income-expenses-chart',
  templateUrl: './income-expenses-chart.component.html',
  styleUrls: ['./income-expenses-chart.component.scss'],
})
export class IncomeExpensesChartComponent implements OnInit {

  @Input() account: Account
  @Input() chartColor: string
  @Input() type: string
  public chart: any;

  constructor(
    private colorGen: ColorGeneratorService
  ) { }

  ngOnInit() {
    const data = [
      {
        name: 'comida',
        y: 55,
        color: this.colorGen.randomColor()
      },
      {
        name: 'auto',
        y: 22,
        color: this.colorGen.randomColor()
      },
      {
        name: 'otros',
        y: 8,
        color: this.colorGen.randomColor()
      },
      {
        name: 'cuentas',
        y: 15,
        color: this.colorGen.randomColor()
      },
    ]
    
    this.newChart(data)
  }

  newChart(data: any) {
    this.chart = new Chart({
      chart: {
        height: window.innerWidth - 50,
        type: 'pie',
        width: window.innerWidth - 70,
        backgroundColor: 'transparent'
      },
      title: {
        text: undefined
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      series: [{
        showInLegend: false,
        color: this.chartColor,
        data,
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
          },
          color: '#ffffff',
          distance: -40
        },
        size: '80%',
        innerSize: '60%',
        fillColor: {
          linearGradient: [0, 0, 0, 70],
          stops: [
            [0, this.chartColor],
            [1, 'transparent']
          ]
        },
        states: {
          hover: {
            enabled: false
          }
        }
      }]
    } as any);
  }

}
