import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { TabsDonaturPage } from '../tabs-donatur/tabs-donatur';
import { DonaturSignupPage } from '../donatur-signup/donatur-signup';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-donatur-login',
  templateUrl: 'donatur-login.html',
})
export class DonaturLoginPage {

<<<<<<< HEAD
  email: string;
  password: string;

  constructor(private fireauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
=======
  submitted = false;
  status:string;
  lihat = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
>>>>>>> origin/master
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLoginPage');
    this.status = "password";
  }

  masuk(form: NgForm) {

    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){

      loading.present();

      this.navCtrl.setRoot(TabsDonaturPage);

      loading.dismiss();

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }

  // masuk() {
  //   this.navCtrl.setRoot(TabsDonaturPage);
  // }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

<<<<<<< HEAD
  async masuk() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then( data => {
       console.log(this.fireauth.auth.currentUser);
       this.navCtrl.setRoot(TabsDonaturPage);
    })

    .catch( error => {
      console.error(error);      
    })
    
=======
  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
>>>>>>> origin/master
  }

  signUp() {
    this.navCtrl.push(DonaturSignupPage);
  }

}
