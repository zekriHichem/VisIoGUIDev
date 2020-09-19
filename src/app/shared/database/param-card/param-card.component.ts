import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Database} from '../../../models/Database';

@Component({
  selector: 'app-param-card',
  templateUrl: './param-card.component.html',
  styleUrls: ['./param-card.component.scss']
})
export class ParamCardComponent implements OnInit {
  // input var
  @Input() file: any;
  @Input() name: string;
  @Input() size: any;
  @Input() reduce: boolean;

  // selected params
  selectedParams: any;
  // params
  params = [];
  // tables
  table1 = [];
  table2 = [];
  index1 = [];
  index2 = [];
  k = 0 ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.k = 0;
    const url = 'http://127.0.0.1:5007/getParm/' + this.name.replace(' ' , ',');
    this.http.get(url).subscribe((res: Database[]) => {
      res.forEach(y => {
        this.params.push(y);
      });
      this.prepareTable();
      console.log(this.index1);
    });
  }
  prepareTable() {
    const size = this.params.length;
    for (const entry of this.params) {
      if ( this.k <= (Math.trunc(size / 2 )) ) {
        this.table1.push(entry);
        this.index1.push(this.k);
      } else {
        this.table2.push(entry);
        this.index2.push(this.k);
      }
      this.k = this.k + 1 ;
    }
  }
  getindex1(entry) {
    const a = this.table1.indexOf(entry);
    return this.index1[a] + 1 ;
  }
  getindex2(entry) {
    const a = this.table2.indexOf(entry);
    return this.index2[a] + 1;
  }

  reduceCard() {
    this.reduce = !this.reduce;
  }
}
