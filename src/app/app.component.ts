// src/app/app.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    // Set default language
    this.translate.setDefaultLang('ar');
    const browserLang = this.translate.getBrowserLang() || 'ar';
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'ar');
  }
}
