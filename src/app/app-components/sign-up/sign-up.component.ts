import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../../app-services/shared/app-service.service';

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

  userData: UserData;
  registerForm: FormGroup;
  hide = true;  // to hide/show password  

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
  
  // email = new FormControl('', [Validators.required, Validators.email]); // This doesn't work properly
  email = new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]);
  password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  fName = new FormControl('', [Validators.required]);
  lName = new FormControl('', [Validators.required]);
  address1 = new FormControl('', [Validators.required]);
  province = new FormControl('', [Validators.required]);
  postal = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.userData = {
      username: '', 
      password: '',
      fName: '', 
      lName: '', 
      address1: '', 
      address2: '', 
      province: '', 
      postal: '', 
      phone: ''
    }
    this.appService.getApi().subscribe((res) => {
      console.log(res);
    });
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

  

}
