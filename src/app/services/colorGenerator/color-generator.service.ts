import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorGeneratorService {

  constructor() { }

  randomColor(): string {
    // generate random color in hex format
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
