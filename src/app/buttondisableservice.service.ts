import { EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtondisableserviceService {
  @Output() disableNextPrevButton: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }
  disableButtons(value) {
    this.disableNextPrevButton.emit(value)
  }
}
