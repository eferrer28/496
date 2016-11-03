import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//import 'rxjs';bs
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BudgetApi{
    
    private baseUrl = 'http://162.243.137.191:3000/api';
    
    userData: any = {};
    
    constructor(public http: Http){ }

    getUserDetails(){
        return new Promise(resolve =>{
            this.http.get('{$this.baseUrl}/users/580dabfc86fc87486a0d6540')
                .subscribe(res => resolve(res.json()));
         });

    }
 }
