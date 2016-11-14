import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//import { MakeLog } from '../pages/pages';


import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BudgetApi{

    information: any = {};
    constructor(private http:Http) {
    
}
    
    getDetails() : Observable<any> {
        return this.http.get('http://162.243.137.191:3000/api/users/580dabfc86fc87486a0d6540').map((response: Response) => {
            this.information = response.json();
            console.log(this.information);
            return this.information;
        });
    }
      postThis(body: Object) : Observable<any> {
        console.log(body);
        //convert string to json
        let bodyString = JSON.stringify(body); 
        console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); // 
        return this.http.post('http://162.243.137.191:3000/api/logs', bodyString, options).map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
    

    
    
}

