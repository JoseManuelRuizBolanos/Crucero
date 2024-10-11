import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionAllurePage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DescripcionAllurePage }])],
})
export class DescripcionAllurePageModule {}