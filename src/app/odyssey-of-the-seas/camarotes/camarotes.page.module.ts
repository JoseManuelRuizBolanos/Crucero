import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesOdysseyPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, CamarotesOdysseyPage, RouterModule.forChild([{ path: '', component: CamarotesOdysseyPage }])],
})
export class CamarotesOdysseyPageModule {}