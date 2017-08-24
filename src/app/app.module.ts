import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { DonaturLoginPage } from '../pages/donatur-login/donatur-login';
import { DonaturHomePage } from '../pages/donatur-home/donatur-home';
import { DonaturTabsPage } from '../pages/donatur-tabs/donatur-tabs';
import { DonaturListPage } from '../pages/donatur-list/donatur-list';
import { DonaturProfilPage } from '../pages/donatur-profil/donatur-profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DonaturHomePage,
    DonaturLoginPage,
    DonaturTabsPage,
    DonaturListPage,
    DonaturProfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DonaturHomePage,
    DonaturLoginPage,
    DonaturTabsPage,
    DonaturListPage,
    DonaturProfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
