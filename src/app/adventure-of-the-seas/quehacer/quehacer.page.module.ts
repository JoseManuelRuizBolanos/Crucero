import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerAdventurePage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: QuehacerAdventurePage }])],
})
export class QuehacerAdventurePageModule {}