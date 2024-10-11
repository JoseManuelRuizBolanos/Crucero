import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerExplorerPage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: QuehacerExplorerPage }])],
})
export class QuehacerExplorerPageModule {}