import { Component, HostListener, OnInit } from '@angular/core';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';
import { SwiperOptions } from 'swiper';
import * as dayjs from 'dayjs';
import { TranslateService } from '@ngx-translate/core';

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
  colors: string[] = []
  selectedDate = dayjs()

  constructor(
    private colorGen: ColorGeneratorService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    console.log(this.translate.getDefaultLang())
    dayjs.locale(this.translate.getDefaultLang())

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

  prevDate() {
    this.selectedDate = this.selectedDate.subtract(1, 'month');
  }

  nextDate() {
    this.selectedDate = this.selectedDate.add(1, 'month');
  }

}
