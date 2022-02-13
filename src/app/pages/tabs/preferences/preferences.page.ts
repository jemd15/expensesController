import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  public versionNumber: string;
  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;
  selectedLanguage: string = this.translate.getDefaultLang()

  constructor(
    private renderer: Renderer2,
    private appVersion: AppVersion,
    private translate: TranslateService
  ) { }

  async ngOnInit() {
    this.versionNumber = await this.appVersion.getVersionNumber();
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    localStorage.setItem('dark-mode', event.detail.checked);
    (event.detail.checked) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }

  changeLanguage() {
    if (this.selectedLanguage === 'es') {
      this.translate.use('en');
      this.selectedLanguage = 'en'
    } else {
      this.translate.use('es');
      this.selectedLanguage = 'es'
    }
  }

}
