import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit() {
    (this.isDarkModeOn) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }
}
