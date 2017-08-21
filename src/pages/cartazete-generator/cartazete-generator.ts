import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the CartazeteGeneratorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cartazete-generator',
  templateUrl: 'cartazete-generator.html',
  providers: [SocialSharing]
})
export class CartazeteGeneratorPage {
public pessoa;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.pessoa = this.navParams.get("pessoa");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartazeteGeneratorPage');
  }


obterImagem(pessoa) {
  
      return `http://104.131.39.194:8000${pessoa.cartazete}`;
    }


    whatsappShare(){
      this.socialSharing.shareViaWhatsApp("Ajude-me a encontrar: " + this.pessoa.nome, this.obterImagem(this.pessoa),  null /* url */)
        .then(()=>{ /*colocar alerta aqui*/ },
        ()=>{/*colocar alerta aqui*/})
    }
   
    twitterShare(){
      this.socialSharing.shareViaTwitter("Ajude-me a encontrar: " + this.pessoa.nome,this.obterImagem(this.pessoa),null)
      .then(()=>{ /*colocar alerta aqui*/ },
      ()=>{/*colocar alerta aqui*/})
    }
   
    facebookShare(){
      this.socialSharing.shareViaFacebook("Ajude-me a encontrar: " + this.pessoa.nome,this.obterImagem(this.pessoa), null)
      .then(()=>{ /*colocar alerta aqui*/ },
      ()=>{/*colocar alerta aqui*/})
    }

}
