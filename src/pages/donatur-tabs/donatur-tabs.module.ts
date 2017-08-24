import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonaturTabsPage } from './donatur-tabs';

@NgModule({
  declarations: [
    DonaturTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonaturTabsPage),
  ],
})
export class DonaturTabsPageModule {}
