import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NoResultsPage } from '../no-results/no-results';
import { WebApiService } from '../../providers/web-api-service';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'page-list',
  templateUrl: 'search.html',
  entryComponents: [List],
  providers: [WebApiService]
})

export class SearchPage {
  public nomeCompleto=""; mae=""; pai=""; idade; altura; sexo; corPele; corCabelo; corOlhos; tipoFisico; infoAdicionaisAparencia; tatuagem; cicatriz; amputado; deficiente; url;
  public pessoas; desabilitarBotaoBuscar;

  constructor(public navCtrl: NavController, public navParams: NavParams, private webapi: WebApiService, public loadingCtrl: LoadingController, public http: Http) {
  }
 /**
  * Tratamento de informações do campo "Informações adicionais" para criação do json
  */
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

  /**
   * Criação do json com os dados colocados pelo usuário
   */
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
      "cor_cabelos": this.corCabelo,
      "faixa_altura":this.altura,
      "sexo": this.sexo
  }
    return dadosDoDesaparecido;
  }
  /**
   * Tratamento de campos escritos
   */
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
/**
 * Método de carregamento de página
 */
 carregamentoDePagina(){
   let loading = this.loadingCtrl.create({
     content: 'Carregando...'
   });
  loading.present().then(() => {this.recebendoResultado();});
  loading.dismiss().then(() => {});
 }
 /**
  * Método que cria a URL que será enviada ao servidor com os dados de busca e  que fará a chamada para outra página
  * @param jsonDeEntrada : Json com os dados de busca inseridos pelo usuário
  */
  montaURL(jsonDeEntrada) {
  return "http://desaparecidos-rj.guilhermecaeiro.me/webserver/desaparecidos/buscarDesaparecido/?" + encodeURIComponent(JSON.stringify(jsonDeEntrada));}

    /**
     * Método que recebe os resultados do servidor
     */

  recebendoResultado(){    // Call API to get people searched   
    this.desabilitarBotaoBuscar=true;
    let dados = this.dadosDesaparecido()
    let urlSearchParams = new URLSearchParams();
    /*
    urlSearchParams.append('nome', this.nomeCompleto);
    urlSearchParams.append('nome_pai', this.pai);
    urlSearchParams.append('nome_mae', this.mae);
    urlSearchParams.append('idade_aparente', this.idade);
    urlSearchParams.append('possui_cicatriz', this.cicatriz);
    urlSearchParams.append('possui_tatuagem', this.tatuagem);
    urlSearchParams.append('possui_deficiencia', this.deficiente);
    urlSearchParams.append('sofreu_amputacao', this. amputado);
    urlSearchParams.append('cor_olhos', this.corOlhos);
    urlSearchParams.append('cor_pele', this.corPele);
    urlSearchParams.append('cor_cabelos': this.corCabelo);
    urlSearchParams.append('faixa_altura',this.altura);
    urlSearchParams.append('sexo', this.sexo);
    */
    urlSearchParams.append('dados', JSON.stringify(dados) );
    this.http.post('http://desaparecidos-rj.guilhermecaeiro.me/webserver/desaparecidos/buscarDesaparecido/', urlSearchParams).subscribe(
      data => { //se não houver erro, entrará nesse bloco de comando
        this.pessoas = data.json();
        this.pessoas= this.pessoas.desaparecidos;
        if(this.pessoas.length==0){
          this.navCtrl.push(NoResultsPage);
        }       
        else{
          this.navCtrl.push(List, {"pessoa": this.pessoas});
        }
      }, err => { //em caso de erro, entrará nesse bloco de comando
        this.navCtrl.push(NoResultsPage);
        // alert(err);
      }, () => {}
      );
    /*
    this.webapi.enviarDadosServidor(this.montaURL(this.dadosDesaparecido())).subscribe( //monta URL com os dados do Json
      data => { //se não houver erro, entrará nesse bloco de comando
        this.pessoas = data.json();
        this.pessoas= this.pessoas.desaparecidos;
        if(this.pessoas.length==0){
          this.navCtrl.push(NoResultsPage);
        }       
        else{
          this.navCtrl.push(List, {"pessoa": this.pessoas});
        }
      }, err => { //em caso de erro, entrará nesse bloco de comando
        this.navCtrl.push(NoResultsPage);
        // alert(err);
      }, () => {}
    );
    */
  }

  /**
   * Atribui valores nulos a todas as variaveis ao entrar na página
   */
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
    this.desabilitarBotaoBuscar=false;
  }

  /**
   * Limpa os dados do formulário (visualmente) ao sair da página de busca
   */
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
