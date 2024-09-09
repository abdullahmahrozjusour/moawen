import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss'],
})
export class WorkerProfileComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}

  // navigateToTab3() {
  //   this.navCtrl.navigateRoot('/home/tab3');
  // }
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
  ngOnInit() {}

}
