import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuehacerRadiancePage } from './quehacer.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component:QuehacerRadiancePage }])],
})
export class QuehacerRadiancePageModule {}