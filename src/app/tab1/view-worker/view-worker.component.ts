import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-worker',
  templateUrl: './view-worker.component.html',
  styleUrls: ['./view-worker.component.scss'],
})
export class ViewWorkerComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }
  navigateToWorkerContract() {
    this.navCtrl.navigateRoot('/home/tab1/worker-contract');
  }

  ngOnInit() {}

}
