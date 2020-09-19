import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


export interface DialogData {
  algo: string;
}


@Component({
  selector: 'app-add-algo-modal',
  templateUrl: './add-algo-modal.component.html',
  styleUrls: ['./add-algo-modal.component.scss']
})
export class AddAlgoModalComponent implements OnInit {
  selectedAlgo: string;
  constructor(private http: HttpClient,
              private mdr: MatDialogRef<AddAlgoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  ngOnInit() {
  }

  CloseDialog() {
    this.mdr.close(false);
  }

  addCard() {
  }
}
