import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarVoyagerPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ReservarVoyagerPage }])],
})
export class ReservarVoyagerPageModule {}