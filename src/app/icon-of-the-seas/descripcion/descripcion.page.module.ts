import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionIconPage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DescripcionIconPage }])],
})
export class DescripcionIconPageModule {}