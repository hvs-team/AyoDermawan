import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App, ModalController, Platform, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { ModalPage } from './modal-page';

import { DonaturUangPage } from '../donatur-uang/donatur-uang';
import { DonaturBarangPage } from '../donatur-barang/donatur-barang';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-donatur-sumbang',
  templateUrl: 'donatur-sumbang.html',
})

export class DonaturSumbangPage {

  validLembagaUang = false;

  validLembagaBarang = false;
  validKategori = false;
  validProvinsi = false;
  validKota = false;
  validKecamatan = false;

  choose_lembaga = false;
  submitted = false;
  sumbang: string = "barang";

  //uang
  donation: string;  
  lembaga_uang: string;
 
  //barang
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

  UploadFoto() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  cekLembagaUang(){

    this.validLembagaUang = true;
 
 }

  // OpenItemUang() {
  //   // untuk push page dengan tabs dihide
  //   this.app.getRootNav().push(DonaturUangPage);
  // }

  OpenItemUang(form: NgForm) {

    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid && this.validLembagaUang){

      let input = JSON.stringify({
        donation:this.donation,
        lembaga_uang:this.lembaga_uang,
        });

      loading.present();

      // untuk push page dengan tabs dihide
      this.app.getRootNav().push(DonaturUangPage, input);

      loading.dismiss();

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Lengkapi Data',
                // subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }


  OpenItemBarang(form: NgForm) {

    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid && this.validKategori && this.validLembagaBarang && this.validProvinsi && this.validKota && this.validKecamatan){

      let input = JSON.stringify({
        name:this.name,
        kategori:this.kategori,
        lembaga_barang:this.lembaga_barang,
        provinsi:this.provinsi,
        kota:this.kota,
        kecamatan:this.kecamatan,
        address:this.address,
        description:this.description,
        });

      loading.present();

      // untuk push page dengan tabs dihide
      this.app.getRootNav().push(DonaturBarangPage, input);

      loading.dismiss();

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Lengkapi Data',
                // subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }
  // OpenItemBarang() {
  //   // untuk push page dengan tabs dihide
  //   this.app.getRootNav().push(DonaturBarangPage);
  // }

  cekKategori() {
    this.validKategori = true;
  }

  cekLembagaBarang(){

    this.validLembagaBarang = true;
 
 }

 cekProvinsi() {
   this.validProvinsi = true;
 }

 cekKota(){
   this.validKota = true;
 }

 cekKecamatan(){
   this.validKecamatan = true;
 }

  


}

@Component({
  template: 
  `
<ion-header>

  <ion-navbar color="AyoDermawan">
    <ion-title text-center>Unggah Foto</ion-title>
  </ion-navbar>

</ion-header>

<ion-content padding>
  
  <ion-item no-lines>
        <button class='Button' color="AyoDermawan" ion-button outline block (click)='UploadFoto()'><p class="ButtonWordBlue">Selesai</p></button>
        <button class='Button' color="AyoDermawan" ion-button block (click)='dismiss()'><p class="ButtonWord">Batal</p></button>
      </ion-item>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}