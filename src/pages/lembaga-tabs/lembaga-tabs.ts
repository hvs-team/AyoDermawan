import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LembagaLelangPage } from '../lembaga-lelang/lembaga-lelang';
import { LembagaNotifikasiPage } from '../lembaga-notifikasi/lembaga-notifikasi';
import { LembagaProfilPage } from '../lembaga-profil/lembaga-profil';

@IonicPage()
@Component({
  selector: 'page-lembaga-tabs',
  templateUrl: 'lembaga-tabs.html',
})
export class LembagaTabsPage {

  tab1Root = LembagaLelangPage;
  tab2Root = LembagaNotifikasiPage;
  tab3Root = LembagaProfilPage;

  constructor() {

  }

}
