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

  phoneMask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

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
  
  // email = new FormControl('', [Validators.required, Validators.email]); // This doesn't work properly
  email = new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]);
  password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  fName = new FormControl('', [Validators.required]);
  lName = new FormControl('', [Validators.required]);
  address1 = new FormControl('', [Validators.required]);
  province = new FormControl('', [Validators.required]);
  postal = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{1}[\d]{1}[A-Z]')]);
  phone = new FormControl('', [Validators.required]);


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
      case 'email'   : return this.email.hasError('required') ? 'This field is required'
                            : this.email.hasError('pattern') ? 'Not a valid email'
                            : '';
      case 'password': return this.password.hasError('required') ? 'This field is required'
                            : this.password.hasError('pattern') ? 'Password must contains more than 8 numbers, letters, and special characters'
                            : '';
      case 'required': return 'This field is required';
      default        : return '';
    }
  }

  checkData() {
    let result = true;
    if(this.userData.uName == '' ||
       this.userData.password == '' ||
       this.userData.fName == '' ||
       this.userData.lName == '' ||
       this.userData.address1 == '' ||
       // this.userData.address2 == '' || // (Optional)
       this.userData.province == '' ||
       this.userData.postal == '' ||
       this.userData.phone == '') {
      result = false;
    }
    if(this.email.hasError('pattern')) { result = false; }
    if(this.password.hasError('pattern')) { result = false; }

    return result;
  }
}
