import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewPaymentCardComponent } from '../add-new-payment-card/add-new-payment-card.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-payment-methode',
  templateUrl: './payment-methode.component.html',
  styleUrls: ['./payment-methode.component.scss'],
})
export class PaymentMethodeComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  async openPaymentCardModal() {
    const modal = await this.modalCtrl.create({
      component: AddNewPaymentCardComponent,
      initialBreakpoint: 0.65,
      breakpoints: [0, 0.65, 0.75, 0.85],
    });
    return await modal.present();
  }
  async openConfirmModal() {
    this.modalCtrl.dismiss()
    const modal = await this.modalCtrl.create({
      component: MessageComponent,
      componentProps: {
        title: `Your have successfully completed`,
        message: `your payment on 08/06/2024 at 8:23 pm.
                  Your Recruitment request has been placed with us recruitment no. #007. \n 
                  Your payment Receipt no is . #4214`,
      }
    });
    return await modal.present();
  }

  ngOnInit() { }

}
