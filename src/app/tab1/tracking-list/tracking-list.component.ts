import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss'],
})
export class TrackingListComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }
  navigateToWorkerStatus() {
    this.navCtrl.navigateRoot('dashboard/worker-status');
  }

  ngOnInit() {}

}
