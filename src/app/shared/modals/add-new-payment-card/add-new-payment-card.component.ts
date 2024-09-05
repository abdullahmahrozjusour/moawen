import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-payment-card',
  templateUrl: './add-new-payment-card.component.html',
  styleUrls: ['./add-new-payment-card.component.scss'],
})
export class AddNewPaymentCardComponent implements OnInit {

  cardNumber: string= '';
  cardholderName: string= '';
  expirationDate: string= '';
  cvv: string = '';
  billingAddress: string= '';
  city: string= '';
  state: string= '';
  zip: string= '';
  country: string= '';

  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit() {
    if (this.validateForm()) {
      // Handle form submission (e.g., send data to a server or save locally)
      console.log('Form data:', {
        cardNumber: this.cardNumber,
        cardholderName: this.cardholderName,
        expirationDate: this.expirationDate,
        cvv: this.cvv,
        billingAddress: this.billingAddress,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      });
    } else {
      console.error('Form validation failed');
    }
  }

  validateForm(): boolean {
    // Basic validation logic; you can enhance this as needed
    const cardNumberPattern = /^\d{16}$/;
    const expirationDatePattern = /^\d{2}\/\d{2}$/;
    const cvvPattern = /^\d{3,4}$/;

    return (
      cardNumberPattern.test(this.cardNumber) &&
      expirationDatePattern.test(this.expirationDate) &&
      cvvPattern.test(this.cvv)
    );
  }

  formatCardNumber(event: any) {
    const value = event.target.value;
    event.target.value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  }
  ngOnInit() { }

}
