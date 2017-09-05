import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

import { DonaturProfilEditPage } from '../donatur-profil-edit/donatur-profil-edit';
import { LoginPage } from '../login/login';
import { MyApp } from '../../app/app.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-donatur-profil',
  templateUrl: 'donatur-profil.html',
})
export class DonaturProfilPage {

  name_donatur: string;
  email_donatur: string;
  telephone_donatur: string;
  address_donatur: string;

  donatur: FirebaseObjectObservable<any[]>;
  

  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,

    public http: Http, 
    public data: Data,

    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturProfilPage');
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

  editProfil() {
    // untuk push page dengan tabs dihide
    this.app.getRootNav().push(DonaturProfilEditPage);
  }

  logOut(){
    let confirm = this.alertCtrl.create({
      title: 'Apakah Anda Yakin?',
      subTitle: 'Keluar dari akun akan menghapus semua data yang belum tersimpan.',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked')
            // this.navCtrl.setRoot(MyApp);
            this.fireauth.auth.signOut;
            this.app.getRootNav().setRoot(MyApp);
            // ,
            // this.data.logout();
            // this.app.getRootNav().setRoot(MyApp);
          }
        }
      ]
    });
    confirm.present();
  }

}
