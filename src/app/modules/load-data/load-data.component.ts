import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ParamCardComponent} from '../../shared/database/param-card/param-card.component';
import {HttpClient} from '@angular/common/http';
import {Database} from '../../models/Database';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  @ViewChild('DataParmContainer', {static: false, read: ViewContainerRef}) container;
  databaseName: string;
  constructor(private resolver: ComponentFactoryResolver, private http: HttpClient) { }
  // input file
  file: File;
  database = [];
  error = '';
  ngOnInit() {
    const url = environment.url_add + 'DatabaseNames';

    this.http.get(url).subscribe((res: Database[]) => {
      res.forEach(y => {
        const ref = this.container.createComponent(this.resolver.resolveComponentFactory(ParamCardComponent));
        ref.instance.name = y.name;
        ref.instance.reduce = false;
        ref.instance.size = y.size;
        this.database.push(y.name);
        }
      );
    });
  }
  createDataParmCard() {
    // this is comment
    if  (!this.database.includes(this.databaseName)) {
      console.log(this.file);
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.databaseName.replace(' ', ','));
      // @ts-ignore
      formData.append('size', this.file.size);
      this.http.post(environment.url_add, formData).subscribe((val) => {
        console.log(val);
        const ref = this.container.createComponent(this.resolver.resolveComponentFactory(ParamCardComponent));
        ref.instance.name = this.databaseName;
        ref.instance.reduce = true;
        ref.instance.size = this.file.size;
      });
    } else {
      this.error = 'this database name exist try agian';
    }
  }
  postMethod(fileload: any) {
    this.file = fileload.target.files[0] as File;
  }


}
