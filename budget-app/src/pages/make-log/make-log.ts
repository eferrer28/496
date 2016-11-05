import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" [(ngModel)]="todo.foodName" name="foodName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea [(ngModel)]="todo.price" name="price"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `,
})

export class MakeLog {

    info = [];

  constructor(private http:Http, private nav: NavController, private budgetApi: BudgetApi) {
      
  }

    todo = {}
    logForm(){
        console.log(this.todo);
        console.log(this.todo.foodName)
        this.budgetApi.postThis(this.todo).subscribe(data => {
            this.info = data;
            console.log(this.info);
        });
        
    }


    
    

    
}
