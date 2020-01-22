import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

export interface UserData {
  uName: string;
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

  userData: UserData;
  registerForm: FormGroup;
  hide = true;  // to hide/show password

  provinceList = [
    { short: "AB", long: "Alberta" },
    { short: "BC", long: "British Columbia" },
    { short: "MB", long: "Manitoba" },
    { short: "NB", long: "New Brunswick" },
    { short: "NL", long: "Newfoundland and Labrador" },
    { short: "NS", long: "Nova Scotia" },
    { short: "ON", long: "Ontario" },
    { short: "PE", long: "Prince Edward Island" },
    { short: "QC", long: "Quebec" },
    { short: "SK", long: "Saskatchewan" },
    { short: "NT", long: "Northwest Territories" },
    { short: "NU", long: "Nunavut" },
    { short: "YT", long: "Yukon" }
  ]
  
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  fName = new FormControl('', [Validators.required]);
  lName = new FormControl('', [Validators.required]);
  address1 = new FormControl('', [Validators.required]);
  province = new FormControl('', [Validators.required]);
  postal = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][0-9][a-zA-Z][ -]?[0-9][a-zA-Z][0-9]')]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')]);


  constructor() { }

  ngOnInit() {
    this.userData = {
      uName: '', 
      password: '',
      fName: '', 
      lName: '', 
      address1: '', 
      address2: '', 
      province: '', 
      postal: '', 
      phone: ''
    }
    
  }

  getErrorMessage(name: String) {
    switch(name) {
      case 'email'    : return this.email.hasError('required') ? 'This field is required'
                              : this.email.hasError('email') ? 'Not a valid email'
                              : '';
      case 'password' : return this.password.hasError('required') ? 'This field is required'
                              : this.password.hasError('pattern') ? 'Password must contains more than 8 numbers, letters, and special characters'
                              : '';
      case 'postal'   : return this.postal.hasError('required') ? 'This field is required'
                              : this.postal.hasError('pattern') ? 'Postal code should be in A1A-1A1 form'
                              : '';
      case 'phone'    : return this.phone.hasError('required') ? 'This field is required'
                              : this.phone.hasError('pattern') ? 'Must be numbers and - only'
                              : '';
      case 'required' : return 'This field is required';
      default         : return '';
    }
  }

  checkData() {
    let result = true;
    if(this.email.errors ||
      this.password.errors ||
      this.fName.errors ||
      this.lName.errors ||
      this.address1.errors ||
      this.province.errors ||
      this.postal.errors ||
      this.phone.errors) {
      result = false;
    }
    return result;
  }

}
