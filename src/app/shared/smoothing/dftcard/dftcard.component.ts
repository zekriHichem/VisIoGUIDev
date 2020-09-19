import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Database} from '../../../models/Database';
import {LinechartComponent} from '../../widgets/linechart/linechart.component';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-dftcard',
  templateUrl: './dftcard.component.html',
  styleUrls: ['./dftcard.component.scss']
})
export class DftcardComponent implements OnInit {
  selectedParm: any;
  params = [];
  rate: any;
  btnRun = true;
  data = [];
  refchart: any;
  isloaded = false;
  @Input()ref: any;
  @Input()database: any;

  parent: DftcardComponent;
  @ViewChild('container', {static: false, read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver, private http: HttpClient) {
    this.parent = this;
  }
  ngOnInit() {
    const url =environment.url_add+'getParm/' + this.database;
    this.http.get(url).subscribe((res: Database[]) => {
      res.forEach(y => {
        this.params.push(y);
      });
    });
  }

  removeCard() {
    this.ref.destroy();
  }

  rateChange() {
    if (this.isloaded) {
      this.data = [];
      console.log(this.rate);
      const url = environment.url_add+ 'dft/' + this.database + '/' + this.selectedParm + '/' + String(this.rate);
      this.http.get(url).subscribe((res: Database[]) => {
        res.forEach(y => {
          this.data.push(y);
        });
        this.refchart.instance.data = this.data;
        this.refchart.instance.load();
      });
    } else {
      console.log('hello');
    }
  }

  addChart() {
    this.data = [];
    const url = environment.url_add+ 'dft/' + this.database + '/' + this.selectedParm + '/' + String(this.rate);
    this.http.get(url).subscribe((res: Database[]) => {
      res.forEach(y => {
        this.data.push(y);
      });
      const ref = this.container.createComponent(this.resolver.resolveComponentFactory(LinechartComponent));
      ref.instance.ref = ref;
      ref.instance.data = this.data;
      ref.instance.parent = this.parent;
      ref.instance.parmname = this.selectedParm;
      this.refchart = ref;
      this.isloaded = true;
      this.btnRun = false;
    });
  }
}
