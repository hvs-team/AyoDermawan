import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DonaturProfilEditPage } from '../donatur-profil-edit/donatur-profil-edit';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-donatur-profil',
  templateUrl: 'donatur-profil.html',
})
export class DonaturProfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturProfilPage');
  }

  editProfil() {
    this.navCtrl.push(DonaturProfilEditPage);
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
            this.navCtrl.setRoot(LoginPage);
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
