import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesStarPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamarotesStarPage }])],
})
export class CamarotesStarPageModule {}