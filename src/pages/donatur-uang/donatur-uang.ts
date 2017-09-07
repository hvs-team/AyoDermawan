import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DonaturSumbangPage } from '../donatur-sumbang/donatur-sumbang';


import { Data } from '../../providers/data';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the DonaturUangPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-donatur-uang',
  templateUrl: 'donatur-uang.html',
})
export class DonaturUangPage {

  donation: string;  
  lembaga_uang: string;

  id_donatur: string;
  

  constructor(
    private fireauth: AngularFireAuth, 
    private firedata: AngularFireDatabase, 
    public http: Http, 
    public data: Data, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {

      let dataDonasi = JSON.parse(this.navParams.data);

      this.donation = dataDonasi.donation;
      this.lembaga_uang = dataDonasi.lembaga_uang;

      console.log(this.lembaga_uang);

  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.id_donatur = data.id;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturUangPage');
  }

  Cancel() {
    this.navCtrl.pop();
  }

  Finish() {
    this.firedata.list('/uang/'+ this.id_donatur).push({ 
      donation: this.donation, 
      lembaga_uang: this.lembaga_uang,
      verifikasi: 0 
    });
    this.app.getRootNav().push(DonaturSumbangPage);    
    //this.navCtrl.pop();
  }

}
