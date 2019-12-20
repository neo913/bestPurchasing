import { Component, OnInit } from '@angular/core';

export interface UserData {
  username: string;
  password: string;
  fName:    string;
  lName:    string;
  address1: string;
  address2: string;
  province: string;
  postal:   string;
  phone:    string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userData: UserData = {
    username: '', password: '',
    fName: '', lName: '', 
    address1: '', address2: '', province: '', postal: '', phone: ''
  }

  provinceList = [
    { short: "AB", long: "AB - Alberta" },
    { short: "BC", long: "BC - British Columbia" },
    { short: "MB", long: "MB - Manitoba" },
    { short: "NB", long: "NB - New Brunswick" },
    { short: "NL", long: "NL - Newfoundland and Labrador" },
    { short: "NS", long: "NS - Nova Scotia" },
    { short: "ON", long: "ON - Ontario" },
    { short: "PE", long: "PE - Prince Edward Island" },
    { short: "QC", long: "QC - Quebec" },
    { short: "SK", long: "SK - Saskatchewan" },
    { short: "NT", long: "NT - Northwest Territories" },
    { short: "NU", long: "NU - Nunavut" },
    { short: "YT", long: "YT - Yukon" }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
