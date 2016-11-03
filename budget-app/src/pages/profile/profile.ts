import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BudgetApi } from '../../shared/shared';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class Profile {
    
  //returns details that are found of the user on the http request
  details: any;

  constructor(private nav: NavController, private budgetApi: BudgetApi) {
    
  }
  

  
  
 ionViewDidLoad(){
     this.budgetApi.getUserDetails().then(data => this.details = data);
     console.log('## lifecycle ## ion view loaded');
 }
}