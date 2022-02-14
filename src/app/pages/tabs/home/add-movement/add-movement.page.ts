import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Movement } from 'src/app/models/movement.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-add-movement',
  templateUrl: './add-movement.page.html',
  styleUrls: ['./add-movement.page.scss'],
})
export class AddMovementPage implements OnInit {

  addMovementForm: FormGroup
  isRepeatEnabled: boolean = false

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addMovementForm = this.createAddMovementForm()
    console.log(this.addMovementForm.value)
  }
  
  createAddMovementForm() {
    return this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
      date: [dayjs().format('DD-MM-YYYY'), Validators.required],
      type: ['expense'],
      category: ['', Validators.required],
      repeat: ['']
    });
  }

  async closeModal(newMovement: Movement) {
    await this.modalController.dismiss({
      newMovement
    })
  }

  typeChanged($event) {
    this.addMovementForm.controls.type.setValue($event.detail.value)
    console.log(this.addMovementForm.value)
  }

  dateChanged($event) {
    this.addMovementForm.controls.date.setValue($event.detail.value)
    console.log(this.addMovementForm.value)
  }

  addMovement() {
    if (this.addMovementForm.valid) {
      this.closeModal(this.addMovementForm.value)
    }
  }

  onOffRepeat($event) {
    this.isRepeatEnabled = $event.detail.checked;
    (!$event.detail.checked) ? this.addMovementForm.controls.repeat.setValue('') : null
    console.log(this.addMovementForm.value)
  }

  repeatOptionsChanged($event) {
    this.addMovementForm.controls.repeat.setValue($event.detail.value)
    console.log(this.addMovementForm.value)
  }

}
