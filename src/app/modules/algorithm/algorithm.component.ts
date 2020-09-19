import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AddSessionModalComponent} from '../modal/add-session-modal/add-session-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddAlgoModalComponent} from '../modal/add-algo-modal/add-algo-modal.component';
import {HttpClient} from '@angular/common/http';
import {SMACardComponent} from '../../shared/smoothing/smacard/smacard.component';

import {Linechart2Component} from '../../shared/visualisation/linechart/linechart2.component';
import {SessionSpark} from '../../models/SessionSpark';
import {InputAlgo} from '../../models/InputAlgo';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Algo} from '../../models/Algo';
import {Database} from '../../models/Database';
import {DftcardComponent} from '../../shared/smoothing/dftcard/dftcard.component';
import {environment} from '../../../environments/environment';
import {WmacardComponent} from '../../shared/smoothing/wmacard/wmacard.component';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {
  matDialogRef: MatDialogRef<AddAlgoModalComponent>;
  selectedAlgo: string;
  url_db = environment.url_add;
  user: string;
  inputs = [];
  database: string;

  constructor(private resolver: ComponentFactoryResolver, private http: HttpClient, private matDialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService) { }
  @ViewChild('container' , {static: true, read: ViewContainerRef}) container;

  ngOnInit() {
    this.user = sessionStorage.getItem('username');
    this.spinnerService.show();
    this.getInput();
    console.log(this.inputs);
  }
  OpenModal() {
    console.log(this.database);
    this.matDialogRef = this.matDialog.open(AddAlgoModalComponent, {
      disableClose: true,
      data: {algo : this.selectedAlgo}
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.createCardAlgo(res);
      }
    });
  }
  createCardAlgo(algo) {
    switch (algo.toLowerCase()) {
      case 'sma' :
        this.addSma();
        break;
      case 'wma':
        this.addWma();
        break;
      case 'dft':
        this.addDft();
        break;
      case 'linechart':
        this.addLineChart();
        break;
    }
  }
  addSma() {
    console.log(this.database);
    const ref = this.container.createComponent(this.resolver.resolveComponentFactory(SMACardComponent));
    ref.instance.ref = ref;
    ref.instance.database = this.database
  }
  addWma() {
    const ref = this.container.createComponent(this.resolver.resolveComponentFactory(WmacardComponent));
    ref.instance.ref = ref;
  }
  addDft() {
    const ref = this.container.createComponent(this.resolver.resolveComponentFactory(DftcardComponent));
    ref.instance.ref = ref;
    ref.instance.database = this.database

  }
  addLineChart() {
    const ref = this.container.createComponent(this.resolver.resolveComponentFactory(Linechart2Component));
    ref.instance.ref = ref;
  }
  private getInput() {
    this.getDatabase();
  }
  private getDatabase() {
    this.http.get(this.url_db + 'DatabaseNames' ).subscribe((res: Database[] ) => {
      res.forEach(e => {
        this.inputs.push(e);
      });
      this.spinnerService.hide();
    });
  }

}
