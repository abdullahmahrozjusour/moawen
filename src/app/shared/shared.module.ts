import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';
import { ContractDetailsComponent, PaymentComponent, PaymentMethodeComponent, AddNewPaymentCardComponent, MessageComponent, ProfileViewComponent, WithdrawBalanceComponent, WorkerDetailsComponent } from './modals';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule
  ],
  declarations: [PaymentComponent, PaymentMethodeComponent, ContractDetailsComponent, AddNewPaymentCardComponent, MessageComponent, ProfileViewComponent, WithdrawBalanceComponent, LanguageSwitcherComponent,
    WorkerDetailsComponent
  ],
  exports: [PaymentComponent, PaymentMethodeComponent, ContractDetailsComponent, AddNewPaymentCardComponent,
     MessageComponent, ProfileViewComponent, WithdrawBalanceComponent, LanguageSwitcherComponent,
     WorkerDetailsComponent]
})
export class SharedPageModule { }
