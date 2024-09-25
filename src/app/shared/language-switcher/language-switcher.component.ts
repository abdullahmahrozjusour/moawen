import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  selectedLanguage: string = 'en'; // Default selected language

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

  languageChanged(event: Event) {
    const lang = (event.target as HTMLInputElement).value; // Get the selected language
    if (lang) {
      this.selectedLanguage = lang; // Update the selected language
      console.log('Selected Language:', this.selectedLanguage);
      this.switchLanguage(this.selectedLanguage);
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.setDirection(lang);
  }

  private setDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
