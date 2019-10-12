import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
@Component({
  selector: 'CameraPage',
  templateUrl: 'camera.html',
  providers: [[Camera]]
})

export class CameraPage {
  foto:any;
  imagem:any;
  resultado:any;

  constructor(public navCtrl: NavController, private camera: Camera, private platform: Platform, public http: Http, public transfer: FileTransfer, private backgroundMode: BackgroundMode ) {
  //this.backgroundMode.disable();
  //this.tirarFoto();

  }
  tirarFoto(){
	  //this.backgroundMode.enable();
    const options: CameraOptions = {
      quality: 100,
      allowEdit: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
     saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //this.foto = 'data:image/jpeg;base64,' + imageData;
      //this.atualizaFoto(this.foto);

     }, (err) => {
        alert(err);
    });
    //this.backgroundMode.disable();
  }

  atualizaFoto(foto){
    this.imagem=foto;
  }
  enviarFoto(){
    if(this.foto){
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options1: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'name.jpg',
       headers: {}
     }
     fileTransfer.upload(this.foto, 'https://desaparecidos-rj-web1.herokuapp.com/webserver/desaparecidos/getFaceEcoding/', options1)
     .then((data) => {
       // success
       alert("success");
     }, (err) => {
       // error
       alert("error"+JSON.stringify(err));
     });
    }
    else{
      alert("Tire uma foto");
    }
  }
}
