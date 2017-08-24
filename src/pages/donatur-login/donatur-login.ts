import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DonaturTabsPage } from '../donatur-tabs/donatur-tabs';

@IonicPage()
@Component({
  selector: 'page-donatur-login',
  templateUrl: 'donatur-login.html',
})
export class DonaturLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLoginPage');
  }

  masuk() {
    this.navCtrl.setRoot(DonaturTabsPage);
  }

}
