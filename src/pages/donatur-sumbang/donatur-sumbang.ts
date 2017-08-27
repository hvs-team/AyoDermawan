import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-donatur-sumbang',
  templateUrl: 'donatur-sumbang.html',
})
export class DonaturSumbangPage {

  sumbang: string = "uang";

  constructor(
    // private vibration: Vibration,
    public navCtrl: NavController, 
    // public http: Http, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    // public data: Data,
    public loadCtrl: LoadingController) {
  }



}
