import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarOasisPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ReservarOasisPage }])],
})
export class ReservarOasisPageModule {}