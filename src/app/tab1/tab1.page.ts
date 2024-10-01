import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/http/global.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private navCtrl: NavController, private globalService: GlobalService,
    private toastService: ToastService, private loaderService:LoaderService
  ) {}
  userDetails: any;

  ngOnInit(): void {
    this.fetchUserDetails();
  }
  fetchUserDetails(): void {
    this.loaderService.showLoading();
    this.globalService.resolveUser().subscribe({
      next: (data) => {
        this.userDetails = data.response;
        this.loaderService.hideLoading() 
      },
      error: (error) => {
        // Handle errors
        this.toastService.showToastByStatusCode('top', error.status, error.error.message);
        this.loaderService.hideLoading()
      }
    });
    
  }
  navigateToTab3() {
    this.navCtrl.navigateRoot('/home/tab3');
  }
  navigateToWorkers() {
    this.navCtrl.navigateRoot('/home/tab2');
  }
  navigateToProfile() {
    this.navCtrl.navigateRoot('/home/profile');
  }
  navigateToWallet() {
    this.navCtrl.navigateRoot('/home/wallet');
  }
  navigateToBrows() {
    this.navCtrl.navigateRoot('/home/tab3/brows-local');
  }
}
