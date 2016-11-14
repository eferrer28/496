import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BudgetApi } from '../../shared/shared';
import { Http, Response } from '@angular/http';


import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/*
  Generated class for the MakeLog page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
 // selector: 'page-make-log',
  selector: 'make-log',
    template: `
    
    <ion-navbar color="primary">
        <ion-title>Create a Log</ion-title>
    </ion-navbar>


    <form (ngSubmit)="logForm()">

      <ion-item>
    <ion-label>Food Name</ion-label>
        <ion-input required type="text"  [(ngModel)]="todo.foodName" name="foodName"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Price</ion-label>
        <ion-input required type="number"  [(ngModel)]="todo.price" name="price"></ion-input>
      </ion-item>

        <ion-item>
  <ion-label>Budget Friendly</ion-label>
  <ion-checkbox color="dark" checked="true"[(ngModel)]="todo.budgetFriendly" name="budgetFriendly"></ion-checkbox>
    </ion-item>

        <ion-item>
  <ion-label>Paleo Friendly</ion-label>
  <ion-checkbox color="dark" checked="true"[(ngModel)]="todo.paleo" name="paleo"></ion-checkbox>
    </ion-item>

      <button ion-button type="submit" block>Add Log</button>
    </form>
  `,
})

export class MakeLog {

    info = [];

  constructor(private http:Http,
              private nav: NavController, 
              private budgetApi: BudgetApi, 
              public alertCtrl: AlertController) {
      
  }

    todo = {}
    logForm(){
        console.log(this.todo);
        //console.log(this.todo.foodName)
        this.budgetApi.postThis(this.todo).subscribe(data => {
            this.info = data;
            console.log(this.info);
            
        });
        this.showAlert();
        
    } //this was added
    showAlert(){
    //new code for alert
    
    let alert = this.alertCtrl.create({
        title: 'HEY!',
        subTitle: 'YOUR FORM HAS BEEN SUBMITTED. GO CHECK YOUR API',
        buttons: ['OKIE DOKEY']
    });
    alert.present();
    }
    
    }
        
    
