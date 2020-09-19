import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule, MatPaginatorModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { SMACardComponent } from './smoothing/smacard/smacard.component';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { ParamCardComponent } from './database/param-card/param-card.component';
import {FormsModule} from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { DftcardComponent } from './smoothing/dftcard/dftcard.component';
import { WmacardComponent } from './smoothing/wmacard/wmacard.component';

import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {Linechart2Component} from './visualisation/linechart/linechart2.component';
import {ScatterchartComponent} from './visualisation/scatterchart/scatterchart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    SMACardComponent,
    LinechartComponent,
    ParamCardComponent,
    DftcardComponent,
    WmacardComponent,
    Linechart2Component,
    ScatterchartComponent

  ],
  entryComponents: [
    LinechartComponent,
    SMACardComponent,
    DftcardComponent,
    WmacardComponent,
    ParamCardComponent,
    Linechart2Component,
    ScatterchartComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    ChartModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LinechartComponent,
    SMACardComponent,
    Linechart2Component,
    ScatterchartComponent
  ]
})
export class SharedModule { }
