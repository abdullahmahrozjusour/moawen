import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-brows-local',
  templateUrl: './brows-local.component.html',
  styleUrls: ['./brows-local.component.scss'],
})
export class BrowsLocalComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToViewWorker() {
    this.navCtrl.navigateRoot('/home/tab1/view-worker');
  }
  navigateToWorkerContract() {
    this.navCtrl.navigateRoot('/home/tab1/worker-contract');
  }
  ngOnInit() {}

}
