import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BudgetApi{

    information: any = {};
    constructor(private http:Http) {
    
}
    
    getSome() : Observable<any> {
        return this.http.get('http://162.243.137.191:3000/api/users/580dabfc86fc87486a0d6540').map((response: Response) => {
            this.information = response.json();
            console.log(this.information);
            return this.information;
        });
    }
    
}

