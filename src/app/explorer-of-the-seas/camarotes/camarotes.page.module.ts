import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CamarotesExplorerPage } from './camarotes.page';

@NgModule({
  imports: [IonicModule, CamarotesExplorerPage, RouterModule.forChild([{ path: '', component: CamarotesExplorerPage }])],
})
export class CamarotesExplorerPageModule {}