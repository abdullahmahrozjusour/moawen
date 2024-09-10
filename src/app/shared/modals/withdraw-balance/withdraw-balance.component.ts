import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-withdraw-balance',
  templateUrl: './withdraw-balance.component.html',
  styleUrls: ['./withdraw-balance.component.scss'],
})
export class WithdrawBalanceComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  async openPaymentMethodModal() {
    this.cancel()
    this.modalCtrl.dismiss()
    const modal = await this.modalCtrl.create({
      component: PaymentComponent,
      initialBreakpoint: 0.65,  
      breakpoints: [0, 0.65, 0.75, 0.85],  
    });
    return await modal.present();
  }
  ngOnInit() {}

}
