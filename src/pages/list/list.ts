import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ResultsPage } from '../results/results';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'

})
export class List {

 public paramsUrl;
 public pessoas;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.pessoas = navParams.get('pessoa');

  }

  ionViewDidLoad() {
    console.log('Lista teste');
  }

obterImagem(pessoa) {

    return `http://104.131.39.194:8000${pessoa.foto}`;
  }


irParaResultadoDaBusca(pessoa){
    this.navCtrl.push(ResultsPage, {pessoa:pessoa});

}

botaoVoltar(){
  this.navCtrl.pop();
}

}
