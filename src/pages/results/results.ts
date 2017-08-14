import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  public pessoa;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pessoa = this.navParams.get("pessoa");
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

obterImagem(){
    return `http://104.131.39.194:8000${this.pessoa.foto}`;
  }

}
