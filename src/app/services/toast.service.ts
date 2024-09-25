import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', Msg: string, color: 'primary' | 'secondary' | 'success' | 'danger' = 'success') {
    const toast = await this.toastController.create({
      cssClass: '.ion-header-white',
      message: Msg,
      duration: 3000,
      position: position,
      color: color
    });

    await toast.present();
  }

  async showToastByStatusCode(position: 'top' | 'middle' | 'bottom', statusCode: number, optionalMsg?: string) {
    let message: string;
    let color: 'primary' | 'secondary' | 'success' | 'danger';

    switch (statusCode) {
      case 200:
        message = optionalMsg ? optionalMsg : 'Request successful!';
        color = 'success';
        break;
      case 400:
        message = optionalMsg ? optionalMsg :'Bad Request. Please check your input.';
        color = 'danger';
        break;
      case 404:
        message = optionalMsg ? optionalMsg :'Not Found. The requested resource was not found.';
        color = 'danger';
        break;
      case 500:
        message = optionalMsg ? optionalMsg :'Internal Server Error. Please try again later.';
        color = 'danger';
        break;
      default:
        message = optionalMsg ? optionalMsg :'An unexpected error occurred.';
        color = 'danger';
        break;
    }

    await this.presentToast(position, message, color);
  }
}
