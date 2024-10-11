import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerOdysseyPage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, QuehacerOdysseyPage, RouterModule.forChild([{ path: '', component: QuehacerOdysseyPage }])],
})
export class QuehacerOdysseyPageModule {}