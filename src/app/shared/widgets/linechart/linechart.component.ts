import {Component, Inject, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {Chart} from 'highcharts';
import {SMACardComponent} from '../../smoothing/smacard/smacard.component';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  chartOptions: any;
  @Input() data = [];
  @Input() ref: any;
  @Input() parent: any;
  @Input() parmname: any;

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.load();
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
          text: this.parmname
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
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
      series: [{
        name: this.parmname,
        data: this.data
      }],
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


  distoy() {
    this.parent.btnRun = true;
    this.ref.destroy();
  }
}
