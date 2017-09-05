import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DonaturProfilPage } from '../donatur-profil/donatur-profil';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-donatur-profil-edit',
  templateUrl: 'donatur-profil-edit.html',
})
export class DonaturProfilEditPage {

  submitted = false;

  name:string;
  email:string;
  telephone:number;
  address:string;

  donatur: FirebaseObjectObservable<any[]>;
  
  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,
    public navCtrl: NavController,     
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
      var user = this.fireauth.auth.currentUser;      
      const donatur = this.firedata.object('/donatur/'+user.uid).subscribe(data =>{
        this.name=data.name; 
        this.email=data.email;
        this.telephone=data.telephone;
        this.address=data.address;        
      }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturProfilEditPage');
  }

  simpanProfil(){
    var user = this.fireauth.auth.currentUser;          
    this.firedata.object('/donatur/'+user.uid).update({
      name: this.name, email:this.email, address:this.address, telephone:this.telephone
    });
    this.navCtrl.setRoot(DonaturProfilPage);
    
  }


}
