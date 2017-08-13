import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { WebApiService } from '../../providers/web-api-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [WebApiService],

})
export class List {

 public paramsUrl;
 public pessoas;
 public teste;

  constructor(public navCtrl: NavController, private navParams: NavParams, private webapi: WebApiService) {
    this.paramsUrl = navParams.get('paramsUrl');

    // Call API to get people searched
    this.webapi.searchPeople(this.paramsUrl).subscribe(
      data => { this.pessoas = data.json()
        // alert("Cheguei aqui com sucesso");
        this.pessoas= this.pessoas.desaparecidos;
        // alert(this.pessoas.desaparecidos[0].nome);
      },



      err => {
      console.error(JSON.stringify(err))
            alert("Cheguei aqui com falha");
                  alert(JSON.stringify(err));


      },
      () => {
        
        if (JSON.stringify(this.pessoas) == "[]"){
          alert('Empty search - render fail search page');
          this.navCtrl.pop();
          // this.navCtrl.push(FailSearch);
        }
      }
    );           


  }


  ionViewDidLoad() {
    console.log('Lista teste');
  }

getImage(pessoa) {

    // alert("cheguei ate aqui");

    return `http://104.131.39.194${pessoa.cartazete.url}`;
  }
}
