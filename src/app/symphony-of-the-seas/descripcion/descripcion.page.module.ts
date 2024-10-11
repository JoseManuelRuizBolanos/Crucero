import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DescripcionSymphonyPage } from './descripcion.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DescripcionSymphonyPage }])],
})
export class DescripcionSymphonyPageModule {}