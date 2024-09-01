import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CoreService } from '../../services/core.service';

import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  otp: string | undefined;
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate:boolean=false;
  @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent | undefined;
  config :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  form: any;

  constructor(private fb: FormBuilder,
    private coreSer: CoreService) { 
      this.createForm();
    }

  ngOnInit() {}
  
  onOtpChange(otp:any) {
    this.otp = otp;
  }

  getOtp() {
    
    const data = {
      "qid": this.form.value.qId,
      "name": this.form.value.fName,
      "mobileNumber": this.form.value.mobileNo,
      "type": "customer"
    }
    
    this.coreSer.post('generate-otp', { params: data }).subscribe((res) => {
      console.log(res);
      alert('Sms Sent');
    })


  }

  signUpRequest(){
    const data = {
      "qId": this.form.value.qId,
      "firstName": this.form.value.fName,
      "phoneNumber": this.form.value.mobileNo,
      "token": this.otp
    }

    this.coreSer.post('sign-up', { params: data }).subscribe((res) => {
      console.log(res);
      alert('Sms Sent');
    })
  }

  private createForm() {
    this.form = this.fb.group({
      qId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      fName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]]
    });
  }

}
