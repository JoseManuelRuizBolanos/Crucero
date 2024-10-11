import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarOdysseyPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, ReservarOdysseyPage, RouterModule.forChild([{ path: '', component: ReservarOdysseyPage }])],
})
export class ReservarOdysseyPageModule {}