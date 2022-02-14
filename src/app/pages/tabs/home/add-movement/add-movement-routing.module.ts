import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovementPage } from './add-movement.page';

const routes: Routes = [
  {
    path: '',
    component: AddMovementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMovementPageRoutingModule {}
