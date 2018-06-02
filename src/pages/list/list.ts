import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ResultsPage } from '../results/results';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'

})
export class List {

 public pessoas;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.pessoas = navParams.get('pessoa'); //pega informações passadas pela pagina anterior e coloca na variavel "pessoa"

  }

  ionViewDidLoad() {
    console.log('Lista teste');
  }
/**
 * Método que retorna a imagem da pessoa no servidor
 * @param pessoa : informações referente a pessoa que está sendo exibida na tela
 */

obterImagem(pessoa) {

    return `http://desaparecidos-rj.guilhermecaeiro.me${pessoa.foto}`;
  }

/**
 * Vai para a próxima página (ResultsPage) e passa 
 * @param pessoa : informações referente a pessoa que está sendo exibida na tela
 */
irParaResultadoDaBusca(pessoa){
    this.navCtrl.push(ResultsPage, {pessoa:pessoa});

}

botaoVoltar(){
  this.navCtrl.pop();
}

}
