import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-replacement-form',
  templateUrl: './replacement-form.component.html',
  styleUrls: ['./replacement-form.component.scss'],
})
export class ReplacementFormComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  navigateToShortlist() {
    this.cancel();
    this.navCtrl.navigateRoot('dashboard/your-shortlist');
  }
  ngOnInit() {}

}
