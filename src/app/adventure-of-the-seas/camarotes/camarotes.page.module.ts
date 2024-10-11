import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesAdventurePage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamarotesAdventurePage }])],
})
export class CamarotesAdventurePageModule {}