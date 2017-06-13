import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { Contact } from '../pages/contact/contact'; //Eu adionei, qualquer coisa só retirar
=======
>>>>>>> e5279926cd024a72d0d87c34c1bf58b044b454da

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    Contact//Eu adionei, qualquer coisa só retirar
=======
    ListPage
>>>>>>> e5279926cd024a72d0d87c34c1bf58b044b454da
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    Contact//Eu adionei, qualquer coisa só retirar
=======
    ListPage
>>>>>>> e5279926cd024a72d0d87c34c1bf58b044b454da
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
