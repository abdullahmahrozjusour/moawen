import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.scss'],
})
export class ShortListComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }
  navigateToViewWorker() {
    this.navCtrl.navigateRoot('dashboard/view-worker');
  }
  navigateToWorkerContract() {
    this.navCtrl.navigateRoot('dashboard/worker-contract');
  }

  ngOnInit() {}

}
