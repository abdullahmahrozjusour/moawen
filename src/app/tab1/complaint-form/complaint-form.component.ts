import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.scss'],
})
export class ComplaintFormComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}

  
  navigateToComList() {
    this.navCtrl.navigateRoot('/home/tab1/complaints-list');
  }

  ngOnInit() {}

}
