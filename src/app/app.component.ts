import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from "../providers/data";

import { TabsLembagaPage } from '../pages/tabs-lembaga/tabs-lembaga';
import { TabsDonaturPage } from '../pages/tabs-donatur/tabs-donatur';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    
    public data: Data) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    let dataTabsDonatur = JSON.stringify({
        tabs:2
      });

    this.data.isLogin().then((value)=>{
      if(value){
        this.data.getRole().then((value)=>{
          switch(value){
            case "donatur": this.rootPage = TabsDonaturPage; 
              break;
            case "lembaga": this.rootPage = TabsLembagaPage;
              break;
            default : this.rootPage = LoginPage;
              break;
          }
        })
      } else {
         this.rootPage = LoginPage;
      }    
    });

  }
}
