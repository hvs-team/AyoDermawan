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
import { DonaturHome2Page } from '../pages/donatur-home2/donatur-home2';
import { DonaturTabsPage } from '../pages/donatur-tabs/donatur-tabs';
import { DonaturListPage } from '../pages/donatur-list/donatur-list';
import { DonaturList2Page } from '../pages/donatur-list2/donatur-list2';
import { DonaturProfilPage } from '../pages/donatur-profil/donatur-profil';
import { DonaturProfilEditPage } from '../pages/donatur-profil-edit/donatur-profil-edit';
import { DonaturSumbangPage } from '../pages/donatur-sumbang/donatur-sumbang';

// import { SuperTabsModule } from '../ionic2-super-tabs/src';


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
    DonaturHome2Page,
    DonaturLoginPage,
    DonaturTabsPage,
    DonaturListPage,
    DonaturList2Page,
    DonaturProfilPage,
    DonaturProfilEditPage,
    DonaturSumbangPage,
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
    DonaturHome2Page,
    DonaturLoginPage,
    DonaturTabsPage,
    DonaturListPage,
    DonaturList2Page,
    DonaturProfilPage,
    DonaturProfilEditPage,
    DonaturSumbangPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
