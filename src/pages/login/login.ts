import { Component } from '@angular/core';
import { List } from '../list/list';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NoResultsPage } from '../no-results/no-results';
import { WebApiService } from '../../providers/web-api-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  entryComponents: [LoginPage],
  providers: [WebApiService]
})

export class LoginPage {
  public username; password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private webapi: WebApiService, public loadingCtrl: LoadingController) {

  }
  irParaHome(){
    var user = {
        "username" : this.username,
        "password" : this.password
    };
    var autenticacao = 'http://35.199.78.162/webserver/desaparecidos/userLoginMobile/?dados=' + encodeURIComponent(JSON.stringify(user));
    if(autenticacao){
      this.navCtrl.push(HomePage);
    }
    else{
      alert("Usuário não encontrado");
    }
  }
}
