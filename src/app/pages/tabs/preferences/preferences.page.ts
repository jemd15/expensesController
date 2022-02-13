import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { TranslateService } from '@ngx-translate/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  public versionNumber: string;
  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;
  selectedLanguage: string = localStorage.getItem('language')
  selectedSecurity: string = localStorage.getItem('security') || 'none';

  constructor(
    private renderer: Renderer2,
    private appVersion: AppVersion,
    private translate: TranslateService
  ) { }

  async ngOnInit() {
    console.log(this.selectedLanguage)
    this.versionNumber = await this.appVersion.getVersionNumber();
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    localStorage.setItem('dark-mode', event.detail.checked);
    (event.detail.checked) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }

  changeLanguage(event) {
    this.selectedLanguage = event.detail.value
    this.translate.use(this.selectedLanguage);
    localStorage.setItem('language', this.selectedLanguage);
    dayjs.locale(this.selectedLanguage)
  }

  changeSecurity(event) {
    this.selectedSecurity = event.detail.value
    localStorage.setItem('security', this.selectedSecurity);
  }

}
