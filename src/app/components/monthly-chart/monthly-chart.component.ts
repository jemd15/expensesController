import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Account } from 'src/app/models/account.model';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';

@Component({
  selector: 'app-monthly-chart',
  templateUrl: './monthly-chart.component.html',
  styleUrls: ['./monthly-chart.component.scss'],
})
export class MonthlyChartComponent implements OnInit {

  @Input() chartColor: string;
  @Input() date;
  @Input() account: Account;
  public chart: any;

  constructor(
    private colorGen: ColorGeneratorService
  ) {
    if (!this.chartColor) this.chartColor = this.colorGen.randomColor();
  }

  ngOnInit() {
    this.newChart([
      [Date.UTC(2020, 0, 1), 29.9],
      [Date.UTC(2020, 0, 4), 71.5],
      [Date.UTC(2020, 0, 8), 106.4],
      [Date.UTC(2020, 0, 15), 29.9],
      [Date.UTC(2020, 0, 20), 71.5],
      [Date.UTC(2020, 0, 28), 106.4],
    ])
  }
  
  ngOnChanges(date) {
    this.newChart([
      [Date.UTC(2020, 0, 1), 29.9],
      [Date.UTC(2020, 0, 4), 71.5],
      [Date.UTC(2020, 0, 8), 106.4],
      [Date.UTC(2020, 0, 15), 29.9],
      [Date.UTC(2020, 0, 20), 71.5],
      [Date.UTC(2020, 0, 28), 106.4],
    ])
  }

  newChart(data: any) {
    this.chart = new Chart({
      chart: {
        height: 100,
        type: 'areaspline',
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
        areaspline: {
          marker: {
            enabled: false
          }
        }
      },
      xAxis: {
        visible: true,
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%e',
        },
        tickInterval: 24 * 3600 * 1000 * 5
      },
      yAxis: {
        visible: false
      },
      series: [{
        showInLegend: false,
        color: this.chartColor,
        data,
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
