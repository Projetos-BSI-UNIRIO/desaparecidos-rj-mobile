import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-search-option',
  templateUrl: 'search-option.html'
})

export class SearchOptionPage {
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController) {
  }

  irParaCamera(){
    this.navCtrl.push(CameraPage);
  }
  irParaBuscador(){
    this.navCtrl.push(SearchPage);
  }
}
