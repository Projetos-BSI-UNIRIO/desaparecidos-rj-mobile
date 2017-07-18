import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'search.html',
  entryComponents: [List]
})
export class SearchPage {
  public nome; mae; pai; desaparecimento;

constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

goToListOfResults(){
  this.navCtrl.push(List);
}
}
