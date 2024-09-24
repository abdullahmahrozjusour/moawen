import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/services/http/auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private loaderService: LoaderService) {
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

        this.loaderService.showLoading();
        this.authService.otp(data).subscribe({
            next: resp => {
                this.toastService.presentToast('top',resp.errors);
                this.loaderService.hideLoading();
                console.log('Next |Done', JSON.stringify(resp));
            },
            error: error => {
                this.toastService.presentToast('top', error.errors);
                console.log(JSON.stringify(error.error), 'abd')
            }
        });
    }

    signUpRequest(){
        const data = {
            "qId": this.form.value.qId,
            "firstName": this.form.value.fName,
            "phoneNumber": this.form.value.mobileNo,
            "token": this.otp
        }

        this.loaderService.showLoading();
        this.authService.register(data).subscribe({
            next: res => {
            console.log(res,'API DONE.....!!!');
                this.toastService.presentToast('top','Successfully Sign up!');
                this.loaderService.hideLoading();
                this.router.navigate(['/login']);
            },
            error: error => {
                this.toastService.presentToast('top', error.errors);
                console.log(error,'API DONE.....!!!');
            }
        });
    }

    private createForm() {
        this.form = this.fb.group({
            qId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
            fName: ['', [Validators.required]],
            mobileNo: ['', [Validators.required]],
            termsCondition: [, [Validators.required]],
            privacyPolicy: [, [Validators.required]],
        });
    }
}
