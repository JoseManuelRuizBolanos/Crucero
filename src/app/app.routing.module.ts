import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OasisOfTheSeasPage } from './oasis-of-the-seas/oasis-of-the-seas.page';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: OasisOfTheSeasPage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'descripcion',
          },
          {
            path: 'descripcion',
            loadChildren: () => import('./oasis-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionOasisPageModule),
          },
          {
            path: 'quehacer',
            loadChildren: () => import('./oasis-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerOasisPageModule),
          },
          {
            path: 'camarotes',
            loadChildren: () => import('./oasis-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesOasisPageModule),
          },
          {
            path: 'reservar',
            loadChildren: () => import('./oasis-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarOasisPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}