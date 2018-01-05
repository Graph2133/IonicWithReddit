import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { RedditProvider } from "../../providers/reddit/reddit";
import { DetailsPage } from "../details/details";

@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  items: any[];
  category: string;
  limit: any;
  loader: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public redditProvider: RedditProvider,
    public loadingController: LoadingController) {

    this.setDefault();

  }

  ngOnInit() {
    this.getPosts(this.category, this.limit);
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
      this.limit = 10;
    }

  }
  getPosts(category, limit) {
    this.loader = this.loadingController.create({
      content: 'Please wait...'
    });
    this.loader.present();
    this.redditProvider.getAllPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
    },
      err => {
       
      },
      () => { this.loader.dismiss(); }
    );
  }
  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }
  changeCategory() {
  
    this.getPosts(this.category, this.limit);
  }

}
