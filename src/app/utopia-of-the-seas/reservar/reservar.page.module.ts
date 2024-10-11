import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarUtopiaPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ReservarUtopiaPage }])],
})
export class ReservarUtopiaPageModule {}