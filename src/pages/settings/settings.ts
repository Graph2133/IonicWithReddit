import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category: any;
  limit: any;
  loader: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController) {
    this.setDefault();
  }

  setDefault() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    }
    else {
      this.category = 'worldnews';
    }

 if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    }
    else {
      this.limit = 5;
    }

  }
  setNewParams() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
     location.reload();
     this.navCtrl.parent.select(0); 
     
  }

}
