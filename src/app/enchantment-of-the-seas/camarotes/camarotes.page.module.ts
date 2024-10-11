import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesEnchantmentPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamarotesEnchantmentPage }])],
})
export class CamarotesEnchantmentPageModule {}