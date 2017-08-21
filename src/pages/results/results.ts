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

  public pessoa; tatuagem; deficiencia; amputacao; cicatriz;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pessoa = this.navParams.get("pessoa");
    this.tratamentoDeAltura();
    this.tratamentoDeIdade();
    this.tratamentoInformacoesAdicionais();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

obterImagem(){
    return `http://104.131.39.194:8000${this.pessoa.foto}`;
  }

tratamentoDeIdade(){
  if(this.pessoa.idade_aparente =="ate_18_anos"){
    this.pessoa.idade_aparente ="até 18 anos";
  }
  else if(this.pessoa.idade_aparente =="de_19_ate_30_anos"){
    this.pessoa.idade_aparente ="de 19 até 30 anos";
  }
  else if(this.pessoa.idade_aparente =="de_31_ate_45_anos"){
    this.pessoa.idade_aparente ="de 31 até 45 anos";
  }
  else if(this.pessoa.idade_aparente =="de_46_ate_65_anos"){
    this.pessoa.idade_aparente ="de 31 até 45 anos";
  }
  else if(this.pessoa.idade_aparente =="mais_de_65_anos"){
    this.pessoa.idade_aparente="mais de 65 anos";
  }
  else{
    this.pessoa.idade_aparente ="não informado";
  }
}

tratamentoInformacoesAdicionais(){
  if(this.pessoa.possui_tatuagem==true){
    this.tatuagem = "sim";
  }
  else{
    this.tatuagem = "não";
  }
  if(this.pessoa.possui_cicatriz==true){
    this.cicatriz = "sim";
  }
  else{
    this.cicatriz  = "não";
  }
  if(this.pessoa.possui_deficiencia==true){
    this.deficiencia = "sim";
  }
  else{
    this.deficiencia = "não";
  }
  if(this.pessoa.sofre_amputacao==true){
    this.amputacao = "sim";
  }
  else{
    this.amputacao = "não";
  }
}

tratamentoDeAltura(){
  if(this.pessoa.faixa_altura =="anao"){
    this.pessoa.faixa_altura ="anão";
  }
  else if(this.pessoa.faixa_altura =="ate_160"){
    this.pessoa.faixa_altura ="até 1,60";
  }
  else if(this.pessoa.faixa_altura =="de_160_ate_170"){
    this.pessoa.faixa_altura ="de 1,60 até 1,70";
  }
  else if(this.pessoa.faixa_altura =="de_170_ate_180"){
    this.pessoa.faixa_altura ="de 1,70 até 1,80";
  }
  else if(this.pessoa.faixa_altura =="acima_de_180"){
    this.pessoa.faixa_altura ="acima de 1,80";
  }
  else{
    this.pessoa.faixa_altura ="não informado";
  }
}

irParaGeradorDeCartazete(pessoa){
  this.navCtrl.push(CartazeteGeneratorPage, {pessoa:pessoa});

}


}