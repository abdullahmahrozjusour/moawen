import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  selectedLanguage: string = 'en'; // Default to 'en'

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Check for saved language in local storage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    this.selectedLanguage = savedLanguage ? savedLanguage : this.selectedLanguage; // Use default if none found
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
    this.setDirection(this.selectedLanguage);
  }

  languageChanged(lang: string) {
    this.selectedLanguage = lang; // Update the selected language
    console.log('Selected Language:', this.selectedLanguage);
    this.switchLanguage(this.selectedLanguage);
    localStorage.setItem('selectedLanguage', this.selectedLanguage); // Save to local storage
    this.cdr.detectChanges(); // Ensure change detection is triggered
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.setDirection(lang);
  }

  private setDirection(lang: string) {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    console.log('Setting document direction to:', direction);
    document.documentElement.dir = direction;
  }
}
