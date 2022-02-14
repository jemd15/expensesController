import { Component, HostListener, OnInit } from '@angular/core';
import { ColorGeneratorService } from 'src/app/services/colorGenerator/color-generator.service';
import { SwiperOptions } from 'swiper';
import * as dayjs from 'dayjs';
import { ModalController } from '@ionic/angular';
import { AddMovementPage } from './add-movement/add-movement.page';
import { Movement } from 'src/app/models/movement.model';

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
  selectedDate
  movements: Movement[] = []

  constructor(
    private colorGen: ColorGeneratorService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.selectedDate = dayjs()

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

  async addMovement() {
    const modal = await this.modalController.create({
      component: AddMovementPage
    })

    modal.onDidDismiss()
      .then((res: any) => {
        if (res.data.newMovement) this.movements.push(res.data.newMovement)
      })

    return await modal.present()
  }

}
