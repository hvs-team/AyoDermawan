import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

import { DonaturProfilEditPage } from '../donatur-profil-edit/donatur-profil-edit';
import { LoginPage } from '../login/login';
import { MyApp } from '../../app/app.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-donatur-profil',
  templateUrl: 'donatur-profil.html',
})
export class DonaturProfilPage {

  name:string;
  email:string;
  telephone:number;
  address:string;

  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public app: App) {
      // this.firedata.object('/donatur/${data.uid}').subscribe( data => {
      //     this.name = data.name;
      //     this.email = data.email;
      //     this.address = data.address;
      //     this.telephone = data.telephone;
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturProfilPage');
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
