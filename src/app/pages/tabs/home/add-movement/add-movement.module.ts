import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMovementPageRoutingModule } from './add-movement-routing.module';

import { AddMovementPage } from './add-movement.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMovementPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [AddMovementPage]
})
export class AddMovementPageModule {}
