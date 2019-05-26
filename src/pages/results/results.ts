import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartazeteGeneratorPage } from '../cartazete-generator/cartazete-generator';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
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

  public pessoa; tatuagem; deficiencia; amputacao; cicatriz; cabelo; mae; pai; olhos;
  latitude: any;
  longitude:any;
  localizacao:any;
  countryCode:any;
  countryName:any;
  postalCode:any;
  administrativeArea:any;
  subAdministrativeArea:any;
  locality:any;
  sublocality:any;
  thoroughfare:any;
  subThoroughfare:any;


  constructor(public navCtrl: NavController, private geolocation : Geolocation, private nativeGeocoder: NativeGeocoder, public navParams: NavParams) {
    this.pessoa = this.navParams.get("pessoa");
    this.tratamentoDeAltura();
    this.tratamentoDeIdade();
    this.tratamentoInformacoesAdicionais();
    this.getEndereco();
    this.tratamentoDeCabelo();
    this.tratamentoMae();
    this.tratamentoPai();
    this.tratamentoDeOlhos();
 }


  obterImagem(){
      if(this.pessoa.foto){
          return `http://desaparecidos-rj.guilhermecaeiro.me${this.pessoa.foto}`;
      }
      else{
        return 'http://desaparecidos-rj.guilhermecaeiro.me/static/images/user-icon.png'
      }

    }


  /**
   * Tratamento de exibição de informações referentes à idade.
   */
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
  /**
   * Tratamento de exibição de informações referentes à cor de cabelo.
   */
  tratamentoDeCabelo(){
    if(this.pessoa.cor_cabelos =="aco"){
      this.cabelo ="aço";
    }
    else if(this.pessoa.cor_cabelos =="branco"){
      this.cabelo ="branco";
    }
    else if(this.pessoa.cor_cabelos =="castanho_claro"){
      this.cabelo ="castanho claro";
    }
    else if(this.pessoa.cor_cabelos =="castanho_escuro"){
      this.cabelo="castanho escuro";
    }
    else if(this.pessoa.cor_cabelos =="com_mechas_ou_faixas"){
      this.cabelo="com mechas ou faixas";
    }
    else if(this.pessoa.cor_cabelos =="loiro"){
      this.cabelo="loiro";
    }
    else if(this.pessoa.cor_cabelos =="preto"){
      this.cabelo="preto";
    }
    else if(this.pessoa.cor_cabelos =="ruivo"){
      this.cabelo="ruivo";
    }
    else{
      this.cabelo ="não informado";
    }
  }



  tratamentoDeOlhos(){
    if(this.pessoa.cor_olhos =="Azuis"){
      this.olhos ="azuis";
    }
    else if(this.pessoa.cor_olhos =="castanhos_claros"){
      this.olhos ="castanhos claros";
    }
    else if(this.pessoa.cor_olhos =="castanhos_escuros"){
      this.olhos ="castanhos escuros";
    }
    else if(this.pessoa.cor_olhos =="cinzentos"){
      this.olhos="cinzentos";
    }
    else if(this.pessoa.cor_olhos =="desiguais_na_cor"){
      this.olhos="desiguais na cor";
    }
    else if(this.pessoa.cor_olhos =="pretos"){
      this.olhos="pretos";
    }
    else if(this.pessoa.cor_olhos =="verdes"){
      this.olhos="verdes";
    }
    else if(this.pessoa.cor_olhos =="violetas"){
      this.olhos="violetas";
    }
    else{
      this.olhos ="não informado";
    }
  }


  /**
   * Tratamento de exibição de informações referentes à cor de cabelo.
   */
  tratamentoMae(){
    if(this.pessoa.nome_mae !=undefined){
      this.mae= this.pessoa.nome_mae;
    }
    else{
      this.mae ="não informado";
    }
  }
  tratamentoPai(){
    if(this.pessoa.nome_pai !=undefined){
      this.pai =this.pessoa.nome_pai;
    }
    else{
      this.pai ="não informado";
    }


  }
  /**
   * Tratamento de exibição de informações referentes às informações adicionais.
   */
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
/**
   * Tratamento de exibição de informações referentes à altura.
   */
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

  getEndereco(){

    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude= resp.coords.latitude;
    this.longitude=resp.coords.longitude;
      this.nativeGeocoder.reverseGeocode( resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
            this.localizacao = result[0];
            this.tratandoEndereco(this.localizacao);

          })
          .catch((error: any) => alert(error));

    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }

  tratandoEndereco(endereco){
    this.countryCode=endereco.countryCode;
    this.countryName=endereco.countryName;
    this.postalCode=endereco.postalCode;
    this.administrativeArea=endereco.administrativeArea;
    this.subAdministrativeArea=endereco.subAdministrativeArea;
    this.locality=endereco.locality;
    this.sublocality=endereco.subLocality;
    this.thoroughfare=endereco.thoroughfare;
    this.subThoroughfare=endereco.subThoroughfare;

  }


}
