import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthHelperService } from '../services/auth-helper-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authHelper: AuthHelperService) {}

  onLogout() {
    this.authHelper.logout();
  }

   
  selectedDate: string = '';

  ngOnInit() {
  }

}
