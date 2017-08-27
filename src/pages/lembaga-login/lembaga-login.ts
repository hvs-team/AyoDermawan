import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsLembagaPage } from '../tabs-lembaga/tabs-lembaga';

@IonicPage()
@Component({
  selector: 'page-lembaga-login',
  templateUrl: 'lembaga-login.html',
})
export class LembagaLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LembagaLoginPage');
  }

  masuk() {
    this.navCtrl.setRoot(TabsLembagaPage);
  }

}
