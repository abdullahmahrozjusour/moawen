import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
})
export class ComplaintsComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToComForm() {
    this.navCtrl.navigateRoot('/home/tab1/form');
  }
  navigateToComList() {
    this.navCtrl.navigateRoot('/home/tab1/complaints-list');
  }
  ngOnInit() {}

}
