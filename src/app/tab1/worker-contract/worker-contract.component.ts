import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentComponent, ContractDetailsComponent } from 'src/app/shared/modals';

@Component({
  selector: 'app-worker-contract',
  templateUrl: './worker-contract.component.html',
  styleUrls: ['./worker-contract.component.scss'],
})
export class WorkerContractComponent implements OnInit {

  constructor(private modalController: ModalController) { }


  ngOnInit() { }

  async openPaymentModal() {
    const modal = await this.modalController.create({
      component: PaymentComponent,
      initialBreakpoint: 0.45,
      breakpoints: [0, 0.45, 0.65, 0.85],
    });
    return await modal.present();
  }

  async openContractModal() {
    const modal = await this.modalController.create({
      component: ContractDetailsComponent,

    });
    return await modal.present();
  }

}
