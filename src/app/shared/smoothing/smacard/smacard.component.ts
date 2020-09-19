import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LinechartComponent} from '../../widgets/linechart/linechart.component';
import {Database} from '../../../models/Database';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-smacard',
  templateUrl: './smacard.component.html',
  styleUrls: ['./smacard.component.scss']
})
export class SMACardComponent implements OnInit {
  @Input()ref: any;
  @Input()database: any;
  parent: SMACardComponent;
  @ViewChild('container', {static: false, read: ViewContainerRef}) container;
  params = [];
  sizewin: number;
  selectedParm: any;
  data = [];
  refchart: any;
  isloaded = false;
  btnRun = true;
  constructor(private resolver: ComponentFactoryResolver, private http: HttpClient) {
    this.parent = this;
  }

  ngOnInit() {
    const url = environment.url_add +'getParm/' + this.database;
    this.http.get(url).subscribe((res: Database[]) => {
      res.forEach(y => {
        this.params.push(y);
      });
    });
  }

  addChart() {
    this.data = [];
    const url = environment.url_add+ this.database + '/' + this.selectedParm + '/MA/' + String(this.sizewin);
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
  removeCard() {
    this.ref.destroy();
  }

  sizeChange() {
    if (this.isloaded) {
      this.data = [];
      const url = environment.url_add + this.database + '/' + this.selectedParm + '/MA/' + String(this.sizewin);
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
}
