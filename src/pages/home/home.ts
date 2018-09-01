import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchOptionPage } from '../search-option/search-option';


/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {

  }


irParaPaginaDeBusca(){
  this.navCtrl.push(SearchOptionPage);
  }
}
