import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HttpModule } from '@angular/http';

import { Page1, Page2, Profile, MakeLog, Welcome } from '../pages/pages';
import { BudgetApi } from '../shared/shared'
import { LogApi } from '../shared/log-api.service'
//import { LogApi } from '../pages/make-log/make-log'



@Component({
  templateUrl: 'app.html',
  //inject this - angular 2 
  providers: [
    BudgetApi,
    HttpModule,
    LogApi
    
    
    ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Welcome;

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openHome() {
    
    this.nav.push(Welcome);
  }
     openProfile() {
    
    this.nav.push(Profile);
  }
     openNewLog() {
    
    this.nav.push(MakeLog);
  }
}
