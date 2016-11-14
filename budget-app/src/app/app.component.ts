import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HttpModule } from '@angular/http';

import { Page1, Page2, Profile, MakeLog, Welcome, Vibrate, Cam } from '../pages/pages';
import { BudgetApi } from '../shared/shared';
import { LogApi } from '../shared/log-api.service';
//import { LogApi } from '../pages/make-log/make-log'

import {Deploy} from '@ionic/cloud-angular';

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

  constructor(
    public platform: Platform, 
    public deploy: Deploy) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
         this.deploy.check().then((snapshotAvailable: boolean) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  })
  }
   
   
   /*
  updateApp(){
        this.updateSnapshot();
        
    }     
   
    updateSnapshot(){
        this.deploy.check().then((snapshotAvailable:boolean) => 
            if(snapShotAvailable) {
                this.deploy.download().then(() = { 
                    return this.deploy.extract();
                }).then(() => {
                    this.deploy.load();
                });
        });
    }*/
                               

  openHome() {
    
    this.nav.push(Welcome);
  }
     openProfile() {
    
    this.nav.push(Profile);
  }
     openNewLog() {
    
    this.nav.push(MakeLog);
  }
    openVibrate() {
    
    this.nav.push(Vibrate);

}
    openCam() {
    
    this.nav.push(Cam);

}
  }
