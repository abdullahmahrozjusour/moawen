import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private translate: TranslateService) {}

  // Optional: Function to switch languages
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
  }

}
