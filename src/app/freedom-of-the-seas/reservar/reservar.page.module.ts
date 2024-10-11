import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarFreedomPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ReservarFreedomPage }])],
})
export class ReservarFreedomPageModule {}