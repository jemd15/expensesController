import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';

import { ResumePage } from './resume.page';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumePageRoutingModule,
    SwiperModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [
    ResumePage
  ]
})
export class ResumePageModule {}
