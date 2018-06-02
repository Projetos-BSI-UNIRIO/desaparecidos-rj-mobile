import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/**
 * Generated class for the TestePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {
  latitude:any;
  longitude:any;
  localizacao:any;
  countryCode:any;
  countryName:any;
  postalCode:any;
  administrativeArea:any;
  subAdministrativeArea:any;
  locality:any;
  sublocality:any;
  thoroughfare:any;
  subThoroughfare:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation : Geolocation, private nativeGeocoder: NativeGeocoder) {}

getEndereco(){
  
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude= resp.coords.latitude;
    this.longitude=resp.coords.longitude ;
    this.nativeGeocoder.reverseGeocode( resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
          this.localizacao = result[0];
          alert(JSON.stringify(result));
          this.tratandoEndereco(this.localizacao);
          
        })
        .catch((error: any) => alert(error));



  }).catch((error) => {
    console.log('Error getting location', error);
  });


}

tratandoEndereco(endereco){
  this.countryCode=endereco.countryCode;
  this.countryName=endereco.countryName;
  this.postalCode=endereco.postalCode;
  this.administrativeArea=endereco.administrativeArea;
  this.subAdministrativeArea=endereco.subAdministrativeArea;
  this.locality=endereco.locality;
  this.sublocality=endereco.locality;
  this.thoroughfare=endereco.thoroughfare;
  this.subThoroughfare=endereco.subThoroughfare;

  alert(this.countryCode);
  alert(this.countryName);
  alert(this.postalCode);
  alert(this.administrativeArea);
  alert(this.subAdministrativeArea);
  alert(this.locality);
  alert(this.sublocality);
  alert(this.thoroughfare);
  alert(this.subThoroughfare);
  }

}


