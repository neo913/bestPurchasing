import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AppService } from 'src/app/app-services/shared/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: Router;
  signedIn: boolean = false;  // temp
  
  constructor(public dialog: MatDialog, public appSvc: AppService) { }

  ngOnInit() {
  }

  openSignInDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '40%', height: '50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);
    });
  }

  openSignUpDialog() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '40%'
    });
    // this.appSvc.getApi('/getAllUsers').subscribe((res) => {
    //   console.log(res);
    // });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);
      if(result) {
        this.appSvc.postAPI('/createUser', result).subscribe(
          (res) => console.log(res) 
        );
      }
    });
  }
}
