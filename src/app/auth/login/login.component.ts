import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AuthService } from 'src/app/services/http/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { HelperService } from 'src/app/services/helper.service';
import { AuthHelperService } from 'src/app/services/auth-helper-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  form: any;
  otp: string | undefined;

  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput: NgOtpInputComponent | undefined;

  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authHelper: AuthHelperService,
    private toastService: ToastService,
    private router: Router,
    private loaderService: LoaderService,
    private helper: HelperService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  onOtpChange(otp: any) {
    this.otp = otp;
  }

  getOtp() {
    const qId = this.form.value.qId;
    const data = {
      "qid": qId,
      "type": "customer"
    };

    this.loaderService.showLoading();
    this.authService.otp(data).subscribe({
      next: resp => {
        this.toastService.presentToast('top', resp.errors);
        this.loaderService.hideLoading();
        console.log('Next | Done', JSON.stringify(resp.status));
      },
      error: error => {
        this.loaderService.hideLoading();
        this.toastService.showToastByStatusCode('top', error.status)
      }
    });
  }



  private createForm() {
    this.form = this.fb.group({
      qId: ['', [Validators.required, this.digitsValidator]]
    });
  }

  digitsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && !/^\d{11}$/.test(value)) {
      return { invalidDigits: true };
    }
    return null;
  }
  restrictInput(event: KeyboardEvent) {
    const input = event.key;
    if (!/^\d$/.test(input) && input !== 'Backspace') {
      event.preventDefault();
    }
  }

  onSubmit() {
    const data = {
      "identifier": this.form.value.qId,
      "token": this.otp,
      "type": "customer"
    }

    this.loaderService.showLoading();

    this.authService.login(data).subscribe({
      next: (res) => {
        console.log(res.access_token)
        this.toastService.presentToast('top', 'Login Success')
        this.authHelper.addAuthToken(res.access_token);
        this.router.navigate(['/home/tab1']);
        this.loaderService.hideLoading();
      },
      error: (res) => {
        this.loaderService.hideLoading();
        this.toastService.showToastByStatusCode('top', res.error.status);
      }
    });
  }
}
