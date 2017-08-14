import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'search.html',
  entryComponents: [List]
})
export class SearchPage {
  public nomeCompleto=""; mae=""; pai=""; idade; altura; sexo; corPele; corCabelo; corOlhos; tipoFisico; infoAdicionaisAparencia; tatuagem; cicatriz; amputado; deficiente; url; 

constructor(public navCtrl: NavController, public navParams: NavParams) {}
 
tratamentoInfoAdicionais(){
  if(this.infoAdicionaisAparencia != null){
  for(var i=0; i<this.infoAdicionaisAparencia.length; i++){
    
      if(this.infoAdicionaisAparencia[i]=="Tatuagem"){
        this.tatuagem = true;
      }
      else{
        this.tatuagem=false;
      }
      if(this.infoAdicionaisAparencia[i]=="Cicatriz"){
        this.cicatriz = true;
      }
      else{
        this.cicatriz=false;
      }
      if(this.infoAdicionaisAparencia[i]=="Deficiente"){
        this.deficiente = true;
      }
      else{
        this.deficiente=false;
      }
      if(this.infoAdicionaisAparencia[i]=="Amputado"){
        this.amputado = true;
      }
      else{
        this.amputado=false;
      }
    }
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
 

montaURL() {
    
    return "http://104.131.39.194:8000/webserver/desaparecidos/buscarDesaparecido/?dados=" + encodeURIComponent(JSON.stringify(this.dadosDesaparecido()));
  }


irAListaDeResultados(){
    console.log(this.montaURL());
    this.navCtrl.push(List, { paramsUrl: this.montaURL() });       
  }
}
