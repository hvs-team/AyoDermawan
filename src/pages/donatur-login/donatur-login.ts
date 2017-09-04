import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsDonaturPage } from '../tabs-donatur/tabs-donatur';
import { DonaturSignupPage } from '../donatur-signup/donatur-signup';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-donatur-login',
  templateUrl: 'donatur-login.html',
})
export class DonaturLoginPage {

  email: string;
  password: string;

  constructor(private fireauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLoginPage');
  }

  async masuk() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then( data => {
       console.log(this.fireauth.auth.currentUser);
       this.navCtrl.setRoot(TabsDonaturPage);
    })

    .catch( error => {
      console.error(error);      
    })
    
  }

  signUp() {
    this.navCtrl.push(DonaturSignupPage);
  }

}
