import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
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
public platform;
public cartazeteUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, platform: Platform) {
    this.pessoa = this.navParams.get("pessoa");
    this.platform = platform;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartazeteGeneratorPage');
  }

/**
 * Retorna o cartazete do servidor
 *
*/
obterImagem(pessoa) {
      this.cartazeteUrl=`http://desaparecidos-rj-web1.herokuapp.com${pessoa.cartazete}`;
      return this.cartazeteUrl;
    }

/**
 * Métodos de compartilhamento referente a cada rede social
 * @whatsapp
 * @twitter
 * @facebook
 *
*/

  share() {
    this.platform.ready().then(() => {
      if((<any>window).plugins.socialsharing) {
          (<any>window).plugins.socialsharing.share("Compartilhe o cartaz com seus conhecidos!", null, this.cartazeteUrl, null);
      }
  });


    // whatsappShare(){
    //   this.socialSharing.shareViaWhatsApp("Ajude-me a encontrar: " + this.pessoa.nome, this.obterImagem(this.pessoa),  null /* url */)
    //     .then(()=>{ /*colocar alerta aqui*/ },
    //     ()=>{/*colocar alerta aqui*/})
    // }

    // twitterShare(){
    //   this.socialSharing.shareViaTwitter("Ajude-me a encontrar: " + this.pessoa.nome,this.obterImagem(this.pessoa),null)
    //   .then(()=>{ /*colocar alerta aqui*/ },
    //   ()=>{/*colocar alerta aqui*/})
    // }

    // facebookShare(){
    //   this.socialSharing.shareViaFacebook("Ajude-me a encontrar: " + this.pessoa.nome,this.obterImagem(this.pessoa), null)
    //   .then(()=>{ /*colocar alerta aqui*/ },
    //   ()=>{/*colocar alerta aqui*/})
    // }

  }
}
