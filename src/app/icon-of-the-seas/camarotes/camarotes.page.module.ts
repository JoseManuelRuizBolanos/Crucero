import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesIconPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamarotesIconPage }])],
})
export class CamarotesIconPageModule {}