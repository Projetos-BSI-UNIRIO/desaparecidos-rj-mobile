import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams } from 'ionic-angular';
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
  public pessoas; 
  
constructor(public navCtrl: NavController, public navParams: NavParams, private webapi: WebApiService) {
}
 
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


recebendoResultado(){
      // Call API to get people searched
      this.webapi.searchPeople(this.montaURL()).subscribe(
        data => { this.pessoas = data.json();     
          this.pessoas= this.pessoas.desaparecidos;
          if(this.pessoas.length==0){
            this.navCtrl.push(NoResultsPage);          
          }
          else{
            this.navCtrl.push(List, {"pessoa": this.pessoas});  
          }
        },
  
        err => {    

          // console.error(JSON.stringify(err))
          // alert("Cheguei aqui com falha");         
          // alert(JSON.stringify(err));
          this.navCtrl.push(NoResultsPage);
          
        },
        () => {}
      );  
  }



}
