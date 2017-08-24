import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { DonaturHomePage } from '../donatur-home/donatur-home';
import { DonaturListPage } from '../donatur-list/donatur-list';
import { DonaturProfilPage } from '../donatur-profil/donatur-profil';

@Component({
  selector: 'page-donatur-tabs',
  templateUrl: 'donatur-tabs.html',
})
export class DonaturTabsPage {

  tab1Root = DonaturHomePage;
  tab2Root = DonaturListPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;
  tab5Root = DonaturProfilPage;

  constructor() {

  }
}