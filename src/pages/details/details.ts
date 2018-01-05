import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.get('item');
    console.log(this.item);
  }

  VisitReddit(){
    window.location.href = "http://reddit.com/"+this.item.permalink;
  }
 
}
