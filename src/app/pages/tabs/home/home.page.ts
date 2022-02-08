import { Component, HostListener, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    initialSlide: 1,
    slidesPerView: this.numberOfCards(),
    centeredSlidesBounds: true,
    width: window.innerWidth,
    loop: true,
    slidesOffsetBefore: 5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

  constructor() { }

  ngOnInit() {
  }

  numberOfCards(): number {
    // calculamos el número de tarjetas que se mostrarán en la página segun el ancho de la pantalla
    return window.innerWidth / 180
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.config.slidesPerView = this.numberOfCards()
    console.log('window.innerWidth', window.innerWidth, 'slidesPerView', this.config.slidesPerView)
  }

}
