import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/enums/catergories.enum';
import { Chart } from 'angular-highcharts';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';

@Component({
  selector: 'app-category-balance-chart',
  templateUrl: './category-balance-chart.component.html',
  styleUrls: ['./category-balance-chart.component.scss'],
})
export class CategoryBalanceChartComponent implements OnInit {

  @Input() category: Categories;
  @Input() chartColor: string;
  public chart: any;

  constructor(
    private colorGen: ColorGeneratorService
  ) {
    if (!this.chartColor) this.chartColor = this.colorGen.randomColor();
  }

  ngOnInit() {
    this.newChart([29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]);
  }

  newChart(data: any) {
    this.chart = new Chart({
      chart: {
        height: 70,
        width: 130,
        type: 'areaspline',
        backgroundColor: 'transparent',
        margin: [0, 0, 0, 0]
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
        visible: false
      },
      yAxis: {
        visible: false
      },
      series: [{
        showInLegend: false,
        color: this.chartColor,
        data,
        fillColor: {
          linearGradient: [0, 0, 0, 80],
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
