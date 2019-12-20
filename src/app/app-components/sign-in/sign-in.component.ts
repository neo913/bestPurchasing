import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  id: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signData: DialogData = { id: '', password: '' };
  constructor(public dialogRef: MatDialogRef<SignInComponent>) { }

  ngOnInit() {
    this.signData.id = '';
    this.signData.password = '';
  }

  onNoClick() {
    this.dialogRef.close();
  }


}
