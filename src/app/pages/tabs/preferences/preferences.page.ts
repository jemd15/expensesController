import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    localStorage.setItem('dark-mode', event.detail.checked);
    (event.detail.checked) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }

}
