import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/http/global.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
  userDetails: any;

  constructor(
    private navCtrl: NavController,
    private globalService: GlobalService,
    private toastService: ToastService,
    private loaderService:LoaderService,
    private route: ActivatedRoute)
  {}


  ngOnInit(): void {
    console.log('asdfasdf INIT')
    this.userDetails = this.route.snapshot.data['userResolver'][0]['response'];
  }

  ngAfterViewInit() {
    console.log('asdfasdf');
    this.loaderService.hideLoading();
  }


  navigationToggle(path:string) {
    if (path == 'hireNow') {
      this.navCtrl.navigateRoot('hireNow');
    } else if (path == 'worker') {
      this.navCtrl.navigateRoot('worker');
    } else if (path == 'profile') {
      this.navCtrl.navigateRoot('profile');
    } else if (path == 'wallet') {
      this.navCtrl.navigateRoot('wallet');
    } else if (path == 'brows-local') {
      this.navCtrl.navigateRoot('hireNow/brows-local');
    }
  }
}
