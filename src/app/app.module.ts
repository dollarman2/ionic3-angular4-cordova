import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { AddDataPage } from '../pages/add-data/add-data';
import { EditDataPage } from '../pages/edit-data/edit-data';
import { DatabaseProvider } from '../providers/database/database';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Network } from '@ionic-native/network';
import { HTTP } from '@ionic-native/http';
import { RestProvider } from '../providers/rest/rest';

const firebaseAuth = {
  apiKey: "AIzaSyCMoTV4O8NcBF2l28600uCDTwzUEauooHs",
  authDomain: "mobile-app-63dba.firebaseapp.com",
  databaseURL: "https://mobile-app-63dba.firebaseio.com",
  projectId: "mobile-app-63dba",
  storageBucket: "mobile-app-63dba.appspot.com",
  messagingSenderId: "551920707288"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    AddDataPage,
    EditDataPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule, 
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    AddDataPage,
    EditDataPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    Network,
    AngularFireDatabase,
    DatabaseProvider,
    RestProvider
  ]
})
export class AppModule {}
