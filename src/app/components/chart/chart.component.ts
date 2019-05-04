import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() data;
  @Input() labels;

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines: {
            color: 'rgba(0,0,0,0)',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(0,0,0,0)',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
    annotation: {},
    legend: {
      display: true,
      labels: {
        fontColor: 'white'
      }
    }
  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.createLineChart(this.data, this.labels);
  }

  createLineChart(chartData, chartLabels) {
    this.lineChartData = [
      { data: chartData, label: 'Temperature' }
    ];

    this.lineChartLabels = chartLabels;
  }

}
