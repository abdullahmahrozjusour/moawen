import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'crescent',
    });

    await this.loading.present();
  }

  async hideLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
