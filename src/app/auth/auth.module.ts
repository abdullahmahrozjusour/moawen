import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreService } from '../services/http/core.service';


import { NgOtpInputModule } from 'ng-otp-input';
import { TranslateModule } from '@ngx-translate/core';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule,
    NgOtpInputModule,
    TranslateModule,
    SharedPageModule

  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
    AuthPage,
    LoginComponent,
    RegisterComponent
  ],
  providers:[
    CoreService,

  ]
})
export class AuthPageModule { }
