import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }
  navigateToBrows() {
    this.navCtrl.navigateRoot('/home/tab3/brows-local');
  }

  ngOnInit() {}

}
