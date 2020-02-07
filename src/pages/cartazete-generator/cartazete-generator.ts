import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { ToastController } from 'ionic-angular';
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
public imagemCartaz;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, platform: Platform, public toastCtrl: ToastController) {
    this.pessoa = this.navParams.get("pessoa");
    this.platform = platform;
    var node = document.getElementById("container");
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            this.imagemCartaz = new Image();
            this.imagemCartaz.src = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
  }
  
  melhorarData(){
    var date = new Date(this.pessoa.data_desaparecimento);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var myFormattedDate = day + "/" + (monthIndex+1) + "/" + year + " às " + hours + ":" + minutes + ":" + seconds;
        if (isNaN(year)) {
            myFormattedDate = "Sem data.";
        }
    document.getElementById("dateExample").innerHTML = myFormattedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartazeteGeneratorPage');
  }

/**
 * Retorna o cartazete do servidor
 *
*/
obterImagem(pessoa) {
      this.cartazeteUrl=`http://desaparecidos-rj.guilhermecaeiro.me${pessoa.foto}`;
      if(pessoa.foto){
          return this.cartazeteUrl;


      }
      else{
          document.getElementById("botao").style.display = "none";
          return  'http://desaparecidos-rj.guilhermecaeiro.me/static/images/no-cartazete.png';
      }
    }

/**
 * Métodos de compartilhamento referente a cada rede social
 * @whatsapp
 * @twitter
 * @facebook
 *
*/

  share() {
    var node = document.getElementById("container");
    domtoimage.toPng(node)
      .then(function(dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        this.platform.ready().then(() => {
          if((<any>window).plugins.socialsharing) {
              (<any>window).plugins.socialsharing.share("Compartilhe o cartaz com seus conhecidos!", null, img, null);
          }
      })
      .catch(function(error) {
        document.getElementById("nome").innerHTML = error;
        document.appendChild(error);
        console.error('oops, something went wrong!', error);
      });

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
