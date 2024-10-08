import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.scss'],
})
export class SubmitApplicationComponent  implements OnInit {

  canDismiss = false;

  constructor(private navCtrl:NavController) { }
  navigateToSuccess() {
    this.navCtrl.navigateRoot('hireNow/success');
  }
  ngOnInit() {}

}
