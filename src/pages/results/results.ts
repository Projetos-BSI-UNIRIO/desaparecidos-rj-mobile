import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartazeteGeneratorPage } from '../cartazete-generator/cartazete-generator';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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



irParaGeradorDeCartazete(pessoa){
  this.navCtrl.push(CartazeteGeneratorPage, {pessoa:pessoa});

}


}