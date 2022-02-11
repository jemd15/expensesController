import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  public versionNumber: string;
  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;

  constructor(
    private renderer: Renderer2,
    private appVersion: AppVersion
  ) { }

  async ngOnInit() {
    this.versionNumber = await this.appVersion.getVersionNumber();
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    localStorage.setItem('dark-mode', event.detail.checked);
    (event.detail.checked) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }

}
