import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionOdysseyPage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, DescripcionOdysseyPage, RouterModule.forChild([{ path: '', component: DescripcionOdysseyPage }])],
})
export class DescripcionOdysseyPageModule {}