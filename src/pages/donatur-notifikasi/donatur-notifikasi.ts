import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Data } from '../../providers/data';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-donatur-notifikasi',
  templateUrl: 'donatur-notifikasi.html',
})
export class DonaturNotifikasiPage {

  notifikasi: string = "pemberitahuan";

  name_donatur: string;
  email_donatur: string;
  telephone_donatur: string;
  address_donatur: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    public http: Http, 
    public data: Data,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturNotifikasiPage');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.name_donatur = data.name;
      this.email_donatur = data.email;
      this.telephone_donatur = data.telephone;
      this.address_donatur = data.address;
    })
    

  }

}
