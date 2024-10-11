import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionExplorerPage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DescripcionExplorerPage }])],
})
export class DescripcionExplorerPageModule {}