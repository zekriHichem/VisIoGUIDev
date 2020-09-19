import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart2.component.html',
  styleUrls: ['./linechart2.component.scss']
})
export class Linechart2Component implements OnInit {
  chartOptions: any;
  Highcharts = Highcharts;
  @Input() data: any[];
  @Input() ref: any;
  @Input() names: any;
  colors = [];
  constructor() { }

  ngOnInit() {
    this.setColors();
    this.load();
    this.data.forEach(e => {
      this.chartOptions.series.push({
        name: this.names[this.data.indexOf(e)],
        data: e,
        color: this.colors[this.data.indexOf(e)],
      });
    });
  }
  randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  setColors() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.data.length; i++) {
      const color = this.randomColor();
      // tslint:disable-next-line:triple-equals
      if (this.colors.indexOf(color) == -1) {
        this.colors.push(color);
      } else {
        i--;
      }
    }
  }
  deleteCard() {
    this.ref.destroy();
  }

  load() {
    this.chartOptions =  {
      chart: {
        type: 'spline',
        zoomType: 'x',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
        }
      },
      title: {
        text: '',
        align: 'center'
      },
      xAxis: {
        labels: {
          overflow: 'justify'
        }
      },
      yAxis: {
        title: {
          text: 'title'
        },
      },
      tooltip: {
        valueSuffix: ' m/s'
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5
            }
          },
          marker: {
            enabled: false
          }
        }
      },
      series: [],
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  drop() {
    this.ref.destroy();
  }
}
