import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WithdrawBalanceComponent } from '../shared/modals';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async openWithdrawModal() {
    const modal = await this.modalCtrl.create({
      component: WithdrawBalanceComponent,
      cssClass: 'middleModal'
    });
    return await modal.present();
  }
}
