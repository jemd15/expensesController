import { Component, HostListener, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  config: SwiperOptions = {
    initialSlide: 1,
    slidesPerView: this.numberOfCards(),
    centeredSlidesBounds: true,
    width: window.innerWidth,
    loop: true,
    loopedSlides: 10, 
    slidesOffsetBefore: 5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  colors: string[] = []
  date = dayjs()

  constructor(
    private colorGen: ColorGeneratorService
  ) { }

  ngOnInit() {
    // generamos un array de colores aleatorios para cada tarjeta
    for (let i = 0; i < 11; i++) {
      this.colors.push(this.colorGen.randomColor())
    }
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
