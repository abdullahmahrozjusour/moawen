import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent  implements OnInit {
  title: string = '';
  message: string = '';

  constructor(private navCtrl:NavController, private modalController: ModalController, private navParams: NavParams ) { }
  navigateToBrows() {
    this.modalController.dismiss();
    this.navCtrl.navigateRoot('dashboard/your-shortlist');
  }
  dismiss() {

    this.modalController.dismiss();
  }
  ngOnInit() {
    this.message = this.navParams.get('title');
    this.message = this.navParams.get('message');

  }

}
