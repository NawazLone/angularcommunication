import { Component } from '@angular/core';
import { ButtondisableserviceService } from './buttondisableservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventemitterproject';
  constructor(private _buttondiableservice: ButtondisableserviceService) {

  }

  disableFunctions(value) {
    this._buttondiableservice.disableButtons(value);
  }
}
