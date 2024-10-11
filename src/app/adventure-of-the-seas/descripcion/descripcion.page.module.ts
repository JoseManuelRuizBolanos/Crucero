import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionAdventurePage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DescripcionAdventurePage }])],
})
export class DescripcionAdventurePageModule {}