import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DonaturList2Page } from '../donatur-list2/donatur-list2';

@IonicPage()
@Component({
  selector: 'page-donatur-list',
  templateUrl: 'donatur-list.html',
})
export class DonaturListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturListPage');
  }

  OpenItem() {
    this.navCtrl.push(DonaturList2Page);
  }

}
