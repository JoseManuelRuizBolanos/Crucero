import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarStarPage } from './reservar.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ReservarStarPage }])],
})
export class ReservarStarPageModule {}