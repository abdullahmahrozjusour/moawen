import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentMethodeComponent } from '../payment-methode/payment-methode.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  async openPaymentMethodModal() {
    this.modalCtrl.dismiss()
    const modal = await this.modalCtrl.create({
      component: PaymentMethodeComponent,
      initialBreakpoint: 0.65,  
      breakpoints: [0, 0.65, 0.75, 0.85],  
    });
    return await modal.present();
  }
  async ngOnInit() {
    // Open the second modal immediately after the first modal is presented
    // await this.openPaymentMethodModal();
  }

}
