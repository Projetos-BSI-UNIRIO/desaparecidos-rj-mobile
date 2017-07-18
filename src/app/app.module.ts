import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { Contact } from '../pages/contact/contact';
import { List } from '../pages/list/list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    Contact,
    List
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    Contact,
    List
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }

export class MapPage {
 constructor(private googleMaps: GoogleMaps) {}

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };

 map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });
 }

}
