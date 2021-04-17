import { Component, OnInit } from '@angular/core';
import { ButtondisableserviceService } from '../buttondisableservice.service';

@Component({
  selector: 'app-buttondisable',
  templateUrl: './buttondisable.component.html',
  styleUrls: ['./buttondisable.component.css']
})
export class ButtondisableComponent implements OnInit {
  disableButtons: Boolean = false
  constructor(private _buttondiableservice: ButtondisableserviceService) { }

  ngOnInit(): void {
    this._buttondiableservice.disableNextPrevButton.subscribe((res) => {
      this.disableButtons = res
    })
  }

}
