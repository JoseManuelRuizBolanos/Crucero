import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerVoyagerPage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: QuehacerVoyagerPage }])],
})
export class QuehacerVoyagerPageModule {}