import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isDarkModeOn: boolean = JSON.parse(localStorage.getItem('dark-mode')) || false;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    console.log(this.isDarkModeOn);
    (this.isDarkModeOn) ? this.renderer.setAttribute(document.body, 'color-theme', 'dark') : this.renderer.setAttribute(document.body, 'color-theme', 'light');
  }
}
