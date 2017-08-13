import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { Contact } from '../pages/contact/contact';
import { List } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { WebApiService } from '../providers/web-api-service';

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
    HttpModule,
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
    StatusBar,
    SplashScreen,
    [WebApiService],
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }


