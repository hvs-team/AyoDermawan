import { Component } from '@angular/core';

import { DonaturHomePage } from '../donatur-home/donatur-home';
import { DonaturListPage } from '../donatur-list/donatur-list';
import { DonaturProfilPage } from '../donatur-profil/donatur-profil';



@Component({
  selector: 'page-donatur-sumbang',
  templateUrl: 'donatur-sumbang.html',
})
export class DonaturSumbangPage {

  tab1Root = DonaturHomePage;
  tab2Root = DonaturListPage;

  constructor() {

  }

}
