import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: Router;
  signedIn: boolean = false;  // temp
  screenWidth = window.screen.width;
  
  constructor() { }

  ngOnInit() {
    this.screenWidth = window.screen.width;
  }

  
}
