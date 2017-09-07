import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DonaturSumbangPage } from '../donatur-sumbang/donatur-sumbang';

import { Data } from '../../providers/data';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// @IonicPage()
@Component({
  selector: 'page-donatur-barang',
  templateUrl: 'donatur-barang.html',
})
export class DonaturBarangPage {

  name: string;
  kategori: string;
  lembaga_barang: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  address: string;
  description: string;

  id_donatur: string;
  

  constructor(
    private fireauth: AngularFireAuth, 
    private firedata: AngularFireDatabase, 
    public http: Http, 
    public data: Data,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {

      let dataBarang = JSON.parse(this.navParams.data);


      this.name = dataBarang.name;
      this.kategori = dataBarang.kategori;
      this.lembaga_barang = dataBarang.lembaga_barang;
      this.provinsi = dataBarang.provinsi;
      this.kota = dataBarang.kota;
      this.kecamatan = dataBarang.kecamatan;
      this.address = dataBarang.address;
      this.description = dataBarang.description;


  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.id_donatur = data.id;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturBarangPage');
  }

  Cancel() {
    this.navCtrl.pop();
  }

  Finish() {
    this.firedata.list('/barang/'+ this.id_donatur).push({ 
      nama: this.name,
      kategori: this.kategori,
      lembaga_barang: this.lembaga_barang,
      provinsi: this.provinsi,
      kota: this.kota,
      kecamatan: this.kecamatan,
      address: this.address,
      description: this.description
    });
    this.app.getRootNav().push(DonaturSumbangPage);
    //this.navCtrl.pop();
  }

}
