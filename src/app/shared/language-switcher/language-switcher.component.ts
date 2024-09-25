import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  languages = ['ar', 'en']; // Add other languages here if needed

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
