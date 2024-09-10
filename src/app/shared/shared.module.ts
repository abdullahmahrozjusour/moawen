import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';
import { ContractDetailsComponent, PaymentComponent, PaymentMethodeComponent, AddNewPaymentCardComponent, MessageComponent, ProfileViewComponent, WithdrawBalanceComponent } from './modals';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule
  ],
  declarations: [PaymentComponent, PaymentMethodeComponent, ContractDetailsComponent, AddNewPaymentCardComponent, MessageComponent, ProfileViewComponent, WithdrawBalanceComponent],
  exports: [PaymentComponent, PaymentMethodeComponent, ContractDetailsComponent, AddNewPaymentCardComponent, MessageComponent, ProfileViewComponent, WithdrawBalanceComponent]
})
export class SharedPageModule { }
