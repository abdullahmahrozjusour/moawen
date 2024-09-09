import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ReplacementFormComponent } from '../replacement-form/replacement-form.component';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss'],
})
export class WorkerProfileComponent  implements OnInit {

  constructor(private modalController: ModalController) {}

  // navigateToTab3() {
  //   this.navCtrl.navigateRoot('/home/tab3');
  // }
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
  async openReplacementReq() {
    const modal = await this.modalController.create({
      component: ReplacementFormComponent
    });
    return await modal.present();
  }
  ngOnInit() {}

}
