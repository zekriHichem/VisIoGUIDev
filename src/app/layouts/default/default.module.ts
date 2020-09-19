import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialog,
  MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadDataComponent} from '../../modules/load-data/load-data.component';
import {HttpClientModule} from '@angular/common/http';
import {SparkContextComponent} from '../../modules/spark-context/spark-context.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {AddSessionModalComponent} from '../../modules/modal/add-session-modal/add-session-modal.component';
import {AlgorithmComponent} from '../../modules/algorithm/algorithm.component';
import {AddAlgoModalComponent} from '../../modules/modal/add-algo-modal/add-algo-modal.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {DatabasesComponent} from '../../modules/databases/databases.component';
import {AddDatabaseModalComponent} from '../../modules/modal/add-database-modal/add-database-modal.component';
import {DatabaseComponent} from '../../modules/databases/database/database.component';
// MDB Angular Pro
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    LoadDataComponent,
    SparkContextComponent,
    AddSessionModalComponent,
    AlgorithmComponent,
    AddAlgoModalComponent,
    DatabasesComponent,
    AddDatabaseModalComponent,
    DatabaseComponent,
  ],
  entryComponents: [AddSessionModalComponent, AddAlgoModalComponent, AddDatabaseModalComponent, DatabaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    Ng4LoadingSpinnerModule.forRoot(),
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
