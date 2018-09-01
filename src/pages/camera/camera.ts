import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'CameraPage',
  templateUrl: 'camera.html',
  providers: [[Camera]]
})

export class CameraPage {
  foto:any;
  imagem:any;
  
  constructor(public navCtrl: NavController, private camera: Camera, private platform: Platform) {
   
  this.tirarFoto();
    
  }
  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
     saveToPhotoAlbum: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.foto = 'data:image/jpeg;base64,' + imageData;
      this.atualizaFoto(this.foto);
     }, (err) => {
        this.navCtrl.pop();

    });
  }

  atualizaFoto(foto){
    this.imagem=foto;
  }
}