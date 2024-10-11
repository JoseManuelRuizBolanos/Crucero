import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesSymphonyPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamarotesSymphonyPage }])],
})
export class CamarotesSymphonyPageModule {}