import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Vibration } from 'ionic-native';


@Component({
  selector: 'vibrate',
  templateUrl: 'vibrate.html'
})

export class Vibrate {

  constructor() {}

  vibrates(){
      Vibration.vibrate(2000);
  }
  vibratesPattern(){
      Vibration.vibrate([2000, 1000, 500]);
  }

}
