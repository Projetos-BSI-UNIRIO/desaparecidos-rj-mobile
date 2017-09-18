import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NoResultsPage } from '../no-results/no-results';
import { WebApiService } from '../../providers/web-api-service';

@Component({
  selector: 'page-list',
  templateUrl: 'search.html',
  entryComponents: [List],
  providers: [WebApiService]
})

export class SearchPage {
  public nomeCompleto=""; mae=""; pai=""; idade; altura; sexo; corPele; corCabelo; corOlhos; tipoFisico; infoAdicionaisAparencia; tatuagem; cicatriz; amputado; deficiente; url; 
  public pessoas; desabilitarBotao; 
  
constructor(public navCtrl: NavController, public navParams: NavParams, private webapi: WebApiService, public loadingCtrl: LoadingController) {
}
 
tratamentoInfoAdicionais(){
  if(this.infoAdicionaisAparencia != ""){
    for(var i=0; i<this.infoAdicionaisAparencia.length; i++){
      
        if(this.infoAdicionaisAparencia[i]=="Tatuagem"){
          this.tatuagem = true;
        }
       
        else if(this.infoAdicionaisAparencia[i]=="Cicatriz"){
          this.cicatriz = true;
        }
        
        else if(this.infoAdicionaisAparencia[i]=="Deficiente"){
          this.deficiente = true;
        }
        
        else{
          this.amputado = true;
        }
        
      }
    }
    else{
      this.amputado=undefined;
      this.cicatriz=undefined;
      this.tatuagem=undefined;     
      this.deficiente=undefined;
    }
}
dadosDesaparecido(){
    this.tratamentoInfoAdicionais();
    this.tratamentoCamposTexto();

  var dadosDoDesaparecido ={
    "nome": this.nomeCompleto,
    "nome_pai": this.pai,
    "nome_mae": this.mae,
    "idade_aparente": this.idade,
    "possui_cicatriz": this.cicatriz,
    "possui_tatuagem": this.tatuagem,
    "possui_deficiencia": this.deficiente,
    "sofreu_amputacao": this. amputado,
    "tipo_fisico": this.tipoFisico,
    "cor_olhos": this.corOlhos,
    "cor_pele": this.corPele,
    "cor_cabelo": this.corCabelo,
    "faixa_altura":this.altura
}
  return dadosDoDesaparecido;
}

tratamentoCamposTexto(){
  if(this.nomeCompleto!=""){
    this.nomeCompleto.trim()
  }
    
  if(this.mae!=""){
    this.mae.trim();
  }
 
  if(this.pai!=""){
    this.pai.trim();
  }
  

}
 carregamentoDePagina(nomeDaPagina, dadosDaPagina = null){
   let loading = this.loadingCtrl.create({
     content: 'Carregando...'
   });
  loading.present();
  loading.dismiss().then(() => {
    this.desabilitarBotao=true;
    this.navCtrl.push(nomeDaPagina, dadosDaPagina);
  });
 }
  
montaURL(jsonDeEntrada) {
  return "http://104.131.39.194:8000/webserver/desaparecidos/buscarDesaparecido/?dados=" + encodeURIComponent(JSON.stringify(jsonDeEntrada));}
recebendoResultado(){    // Call API to get people searched    
  this.webapi.searchPeople(this.montaURL(this.dadosDesaparecido())).subscribe(
    data => { 
      this.pessoas = data.json();
      this.pessoas= this.pessoas.desaparecidos;
      if(this.pessoas.length==0){
        this.carregamentoDePagina(NoResultsPage);
      }        
      else{
        this.carregamentoDePagina(List, {"pessoa": this.pessoas});
      }
    },
      err => {
        this.carregamentoDePagina(NoResultsPage);
      },
    () => {}
  );
}

  ionViewWillEnter(){
    this.montaURL([]);
    this.nomeCompleto ="";
    this.pai ="";
    this.mae ="";
    this.idade = undefined;
    this.tipoFisico = undefined;
    this.corOlhos =undefined;
    this.corPele =undefined,
    this.corCabelo =undefined;
    this.altura =undefined;
    this.sexo=undefined;
    this.amputado=undefined;
    this.cicatriz=undefined;
    this.tatuagem=undefined;     
    this.deficiente=undefined;
    this.infoAdicionaisAparencia="";
    this.desabilitarBotao=false;
  }


ionViewWillLeave(){   
  this.dadosDesaparecido();
  
  this.infoAdicionaisAparencia=[];
  this.nomeCompleto ="";
  this.pai ="";
  this.mae ="";
  this.idade = null;
  this.tipoFisico = null;
  this.corOlhos =null;
  this.corPele =null,
  this.corCabelo =null;
  this.altura =null;
  this.sexo=null;
}



}
