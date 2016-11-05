import { Component } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Blah {

	posts: any;

  constructor(public http: Http) {
 
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    });
 
  }
}
