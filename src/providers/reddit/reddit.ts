import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
 
import 'rxjs/Rx';

@Injectable()
export class RedditProvider {
  http:any;
  baseUrl:string;
  constructor(http: Http) {
     this.http=http;
    this.baseUrl="https://www.reddit.com/r";
  }

  getAllPosts(category,limit){
    return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(response => response.json());
  }

}
