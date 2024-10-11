import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerFreedomPage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component:QuehacerFreedomPage }])],
})
export class QuehacerFreedomPageModule {}