import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent | undefined;

    config :NgOtpInputConfig = {
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

    onOtpChange(otp:any) {
        this.otp = otp;
    }

    getOtp() {
        const qId = this.form.value.qId;

        this.loaderService.showLoading();
        this.authService.otp(qId).subscribe({
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


    private createForm() {
        this.form = this.fb.group({
            qId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
        });
    }

    onSubmit() {
        const data = {
            "identifier": this.form.value.qId,
            "token": this.otp,
            "type": "customer"
        }

        this.loaderService.showLoading();

        this.authService.login(data).subscribe({
            next: (res: {response: { token: any; expireTime: number };}) => {
            this.toastService.presentToast('top', 'Login Success')
            const ExpireTime = HelperService.isNull(res.response.expireTime) ? 90 : res.response.expireTime;
            this.authHelper.addAuthToken(res.response.token, ExpireTime);
            this.loaderService.hideLoading();
            this.router.navigate(['/home/tab1']);
            },
            error: (res: { error: { message: any; }; }) => {
            this.toastService.presentToast('top', 'Error! ' + res.error.message);
            }
        });
    }
}
