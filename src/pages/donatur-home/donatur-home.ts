import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DonaturHome2Page } from '../donatur-home2/donatur-home2';

@IonicPage()
@Component({
  selector: 'page-donatur-home',
  templateUrl: 'donatur-home.html',
})
export class DonaturHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturHomePage');
  }

  OpenItem() {
    this.navCtrl.push(DonaturHome2Page);
  }

}
