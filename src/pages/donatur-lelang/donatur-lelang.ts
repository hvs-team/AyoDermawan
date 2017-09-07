import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App, ModalController, Platform, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { ModalPage } from './modal-page';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// @IonicPage()
@Component({
  selector: 'page-donatur-lelang',
  templateUrl: 'donatur-lelang.html',
})
export class DonaturLelangPage {

  submitted = false;

  name: string;
  kategori: string;
  lembaga_barang: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  address: string;
  description: string;

  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,
    // private vibration: Vibration,
    public navCtrl: NavController, 
    // public http: Http, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    // public data: Data,
    public loadCtrl: LoadingController,
    public app: App,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLelangPage');
  }

  OpenItemBarang(lelangForm){
    this.firedata.list('/lelang/').push({ 
      nama: this.name,
      kategori: this.kategori,
      lembaga_barang: this.lembaga_barang,
      provinsi: this.provinsi,
      kota: this.kota,
      kecamatan: this.kecamatan,
      address: this.address,
      description: this.description
    });
  }
}
