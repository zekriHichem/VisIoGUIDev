import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AddDatabaseModalComponent} from '../modal/add-database-modal/add-database-modal.component';
import {HttpClient} from '@angular/common/http';
import {DbStatus} from '../../models/DbStatus';
import {DatabaseComponent} from './database/database.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {
  matDialogRef: MatDialogRef<AddDatabaseModalComponent>;
  user: String;
  url_DB_Mang = environment.url_interface ;
  @ViewChild('container', {static: true, read: ViewContainerRef}) container;


  constructor (private http: HttpClient, private resolver: ComponentFactoryResolver ,private matDialog: MatDialog) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('username');
    console.log('hell');
    this.getAllBdds();
  }

  getAllBdds(){
    this.http.get(this.url_DB_Mang + 'getallbdd/' + this.user).subscribe((res: DbStatus[]) => {
      res.forEach(e => {
        console.log(e);
        const ref = this.container.createComponent(this.resolver.resolveComponentFactory(DatabaseComponent));
        ref.instance.ref = ref;
        ref.instance.status = e.status ;
        ref.instance.idd = e.id;
        ref.instance.typed = e.typed;
        ref.instance.host = e.host;
        ref.instance.port = e.port;
        ref.instance.db = e.db;
        if (e.status == 'off') {
          ref.instance.bdd_status = false;
        } else  {
          ref.instance.bdd_status = true;
        }
      });
    });

  }
  refTable() {
    this.container.clear();
    this.getAllBdds();
  }

  OpenModal() {
    this.matDialogRef = this.matDialog.open(AddDatabaseModalComponent, {
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      this.container.clear();
      this.getAllBdds();
    });
  }
}
