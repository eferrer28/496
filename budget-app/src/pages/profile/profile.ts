import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BudgetApi } from '../../shared/shared';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html',
    providers: [
    BudgetApi
    
    
    ]
})

export class Profile {
    
  //returns details that are found of the user on the http request
  //details: any;
  info = [];
  

  constructor(private nav: NavController, private budgetApi: BudgetApi) {
    //this.blowMe();
  }

 ionViewDidLoad(){
     this.budgetApi.getSome().subscribe(data => {
       this.info = data;
       console.log(this.info);
        // console.log(data.info);

     });
        }
    } 
    
