import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesOasisPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, CamarotesOasisPage, RouterModule.forChild([{ path: '', component: CamarotesOasisPage }])],
})
export class CamarotesOasisPageModule {}