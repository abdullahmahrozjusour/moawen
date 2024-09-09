import { Component, OnInit } from '@angular/core';
import { ProfileViewComponent } from 'src/app/shared/modals';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-worker-status',
  templateUrl: './worker-status.component.html',
  styleUrls: ['./worker-status.component.scss'],
})
export class WorkerStatusComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  async openProfileView() {
    const modal = await this.modalController.create({
      component: ProfileViewComponent,
      initialBreakpoint: 0.95,
      breakpoints: [0, 0.95, 0.99, 0.99],
    });
    return await modal.present();
  }
}
