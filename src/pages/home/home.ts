import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';


/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }
goToSearchPage(){
  this.navCtrl.push(SearchPage);
}
}
