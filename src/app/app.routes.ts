import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadComponent: () => import ('./login/login.page').then(m => m.LoginPage)},
  {
    path: 'pagina-principal',
    loadComponent: () => import('./pagina-principal/pagina-principal.page').then( m => m.PaginaPrincipalPage)
  },
  {
    path: 'crear-cuenta',
    loadComponent: () => import('./crear-cuenta/crear-cuenta.page').then( m => m.CrearCuentaPage)
  },
  {
    path: 'oasis-of-the-seas',
    loadComponent: () => import('./oasis-of-the-seas/oasis-of-the-seas.page').then( m => m.OasisOfTheSeasPage),
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
    ]
  },
  {
    path: 'voyager-of-the-seas',
    loadComponent: () => import('./voyager-of-the-seas/voyager-of-the-seas.page').then( m => m.VoyagerOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./voyager-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionVoyagerPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./voyager-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerVoyagerPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./voyager-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesVoyagerPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./voyager-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarVoyagerPageModule),
      },
    ]
  },
  {
    path: 'odyssey-of-the-seas',
    loadComponent: () => import('./odyssey-of-the-seas/odyssey-of-the-seas.page').then( m => m.OdysseyOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./odyssey-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionOdysseyPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./odyssey-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerOdysseyPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./odyssey-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesOdysseyPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./odyssey-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarOdysseyPageModule),
      },
    ]
  },
  {
    path: 'explorer-of-the-seas',
    loadComponent: () => import('./explorer-of-the-seas/explorer-of-the-seas.page').then( m => m.ExplorerOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./explorer-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionExplorerPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./explorer-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerExplorerPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./explorer-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesExplorerPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./explorer-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarExplorerPageModule),
      },
    ]
  },
  {
    path: 'adventure-of-the-seas',
    loadComponent: () => import('./adventure-of-the-seas/adventure-of-the-seas.page').then( m => m.AdventureOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./adventure-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionAdventurePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./adventure-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerAdventurePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./adventure-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesAdventurePageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./adventure-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarAdventurePageModule),
      },
    ]
  },
  {
    path: 'allure-of-the-seas',
    loadComponent: () => import('./allure-of-the-seas/allure-of-the-seas.page').then( m => m.AllureOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./allure-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionAllurePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./allure-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerAllurePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./allure-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesAllurePageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./allure-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarAllurePageModule),
      },
    ]
  },
  {
    path: 'icon-of-the-seas',
    loadComponent: () => import('./icon-of-the-seas/icon-of-the-seas.page').then( m => m.IconOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./icon-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionIconPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./icon-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerIconPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./icon-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesIconPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./icon-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarIconPageModule),
      },
    ]
  },
  {
    path: 'star-of-the-seas',
    loadComponent: () => import('./star-of-the-seas/star-of-the-seas.page').then( m => m.StarOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./star-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionStarModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./star-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerStarPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./star-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesStarPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./star-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarStarPageModule),
      },
    ]
  },
  {
    path: 'symphony-of-the-seas',
    loadComponent: () => import('./symphony-of-the-seas/symphony-of-the-seas.page').then( m => m.SymphonyOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./symphony-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionSymphonyPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./symphony-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerSymphonyPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./symphony-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesSymphonyPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./symphony-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarSymphonyPageModule),
      },
    ]
  },
  {
    path: 'utopia-of-the-seas',
    loadComponent: () => import('./utopia-of-the-seas/utopia-of-the-seas.page').then( m => m.UtopiaOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./utopia-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionUtopiaPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./utopia-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerUtopiaPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./utopia-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesUtopiaPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./utopia-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarUtopiaPageModule),
      },
    ]
  },
  {
    path: 'anthem-of-the-seas',
    loadComponent: () => import('./anthem-of-the-seas/anthem-of-the-seas.page').then( m => m.AnthemOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./anthem-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionAnthemPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./anthem-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerAnthemPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./anthem-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesAnthemPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./anthem-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarAnthemPageModule),
      },
    ]
  },
  {
    path: 'brilliance-of-the-seas',
    loadComponent: () => import('./brilliance-of-the-seas/brilliance-of-the-seas.page').then((m) => m.BrillianceOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./brilliance-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionBrilliancePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./brilliance-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerBrilliancePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./brilliance-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesBrilliancePageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./brilliance-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarBrilliancePageModule),
      },
    ]
  },
  {
    path: 'enchantment-of-the-seas',
    loadComponent: () => import('./enchantment-of-the-seas/enchantment-of-the-seas.page').then((m) => m.EnchantmentOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./enchantment-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionEnchantmentPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./enchantment-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerEnchantmentPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./enchantment-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesEnchantmentPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./enchantment-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarEnchantmentPageModule),
      }
    ]
  },
  {
    path: 'freedom-of-the-seas',
    loadComponent: () => import('./freedom-of-the-seas/freedom-of-the-seas.page').then((m) => m.FreedomOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./freedom-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionFreedomPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./freedom-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerFreedomPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./freedom-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesFreedomPageModule),
      },
      {
        path: 'reservar',
        loadChildren: () => import('./freedom-of-the-seas/reservar/reservar.page.module').then((m) => m.ReservarFreedomPageModule),
      }
    ]
  },
  {
    path: 'recordar-contrasena',
    loadComponent: () => import('./recordar-contrasena/recordar-contrasena.page').then( m => m.RecordarContrasenaPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./oasis-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionOasisPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./oasis-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerOasisPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./oasis-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesOasisPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./oasis-of-the-seas/reservar/reservar.page').then( m => m.ReservarOasisPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./voyager-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionVoyagerPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./voyager-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerVoyagerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./voyager-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesVoyagerPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./voyager-of-the-seas/reservar/reservar.page').then( m => m.ReservarVoyagerPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./odyssey-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionOdysseyPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./odyssey-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerOdysseyPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./odyssey-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesOdysseyPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./odyssey-of-the-seas/reservar/reservar.page').then( m => m.ReservarOdysseyPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./explorer-of-the-seas/reservar/reservar.page').then( m => m.ReservarExplorerPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./explorer-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionExplorerPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./explorer-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerExplorerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./explorer-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesExplorerPage)
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () => import('./preguntas-frecuentes/preguntas-frecuentes.page').then( m => m.PreguntasFrecuentesPage)
  },
  {
    path: 'guias-cruceros',
    loadComponent: () => import('./guias-cruceros/guias-cruceros.page').then( m => m.GuiasCrucerosPage)
  },
  {
    path: 'guia1',
    loadComponent: () => import('./guias-cruceros/guia1/guia1.page').then( m => m.Guia1Page)
  },
  {
    path: 'guia2',
    loadComponent: () => import('./guias-cruceros/guia2/guia2.page').then( m => m.Guia2Page)
  },
  {
    path: 'guia3',
    loadComponent: () => import('./guias-cruceros/guia3/guia3.page').then( m => m.Guia3Page)
  },
  {
    path: 'guia4',
    loadComponent: () => import('./guias-cruceros/guia4/guia4.page').then( m => m.Guia4Page)
  },
  {
    path: 'guia5',
    loadComponent: () => import('./guias-cruceros/guia5/guia5.page').then( m => m.Guia5Page)
  },
  {
    path: 'guia6',
    loadComponent: () => import('./guias-cruceros/guia6/guia6.page').then( m => m.Guia6Page)
  },
  {
    path: 'guia7',
    loadComponent: () => import('./guias-cruceros/guia7/guia7.page').then( m => m.Guia7Page)
  },
  {
    path: 'guia8',
    loadComponent: () => import('./guias-cruceros/guia8/guia8.page').then( m => m.Guia8Page)
  },
  {
    path: 'adventure-of-the-seas',
    loadComponent: () => import('./adventure-of-the-seas/adventure-of-the-seas.page').then( m => m.AdventureOfTheSeasPage)
  },
  {
    path: 'allure-of-the-seas',
    loadComponent: () => import('./allure-of-the-seas/allure-of-the-seas.page').then( m => m.AllureOfTheSeasPage)
  },
  {
    path: 'icon-of-the-seas',
    loadComponent: () => import('./icon-of-the-seas/icon-of-the-seas.page').then( m => m.IconOfTheSeasPage)
  },
  {
    path: 'star-of-the-seas',
    loadComponent: () => import('./star-of-the-seas/star-of-the-seas.page').then( m => m.StarOfTheSeasPage)
  },
  {
    path: 'symphony-of-the-seas',
    loadComponent: () => import('./symphony-of-the-seas/symphony-of-the-seas.page').then( m => m.SymphonyOfTheSeasPage)
  },
  {
    path: 'utopia-of-the-seas',
    loadComponent: () => import('./utopia-of-the-seas/utopia-of-the-seas.page').then( m => m.UtopiaOfTheSeasPage)
  },
  {
    path: 'anthem-of-the-seas',
    loadComponent: () => import('./anthem-of-the-seas/anthem-of-the-seas.page').then( m => m.AnthemOfTheSeasPage)
  },
  {
    path: 'brilliance-of-the-seas',
    loadComponent: () => import('./brilliance-of-the-seas/brilliance-of-the-seas.page').then( m => m.BrillianceOfTheSeasPage)
  },
  {
    path: 'enchantment-of-the-seas',
    loadComponent: () => import('./enchantment-of-the-seas/enchantment-of-the-seas.page').then( m => m.EnchantmentOfTheSeasPage)
  },
  {
    path: 'freedom-of-the-seas',
    loadComponent: () => import('./freedom-of-the-seas/freedom-of-the-seas.page').then( m => m.FreedomOfTheSeasPage)
  },
  {
    path: 'grandeur-of-the-seas',
    loadComponent: () => import('./grandeur-of-the-seas/grandeur-of-the-seas.page').then( m => m.GrandeurOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./grandeur-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./grandeur-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./grandeur-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./grandeur-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'harmony-of-the-seas',
    loadComponent: () => import('./harmony-of-the-seas/harmony-of-the-seas.page').then( m => m.HarmonyOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./harmony-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./harmony-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./harmony-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./harmony-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./independence-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./independence-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./independence-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./independence-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./jewel-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'jewel-of-the-seas',
    loadComponent: () => import('./jewel-of-the-seas/jewel-of-the-seas.page').then( m => m.JewelOfTheSeasPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./jewel-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./jewel-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./jewel-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'liberty-of-the-seas',
    loadComponent: () => import('./liberty-of-the-seas/liberty-of-the-seas.page').then( m => m.LibertyOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./liberty-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./liberty-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./liberty-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./liberty-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'mariner-of-the-seas',
    loadComponent: () => import('./mariner-of-the-seas/mariner-of-the-seas.page').then( m => m.MarinerOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./mariner-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./mariner-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./mariner-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./mariner-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'navigator-of-the-seas',
    loadComponent: () => import('./navigator-of-the-seas/navigator-of-the-seas.page').then( m => m.NavigatorOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./navigator-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./navigator-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./navigator-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./navigator-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'ovation-of-the-seas',
    loadComponent: () => import('./ovation-of-the-seas/ovation-of-the-seas.page').then( m => m.OvationOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./ovation-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./ovation-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./ovation-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./ovation-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'quantum-of-the-seas',
    loadComponent: () => import('./quantum-of-the-seas/quantum-of-the-seas.page').then( m => m.QuantumOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./quantum-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./quantum-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./quantum-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./quantum-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./quantum-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'radiance-of-the-seas',
    loadComponent: () => import('./radiance-of-the-seas/radiance-of-the-seas.page').then( m => m.RadianceOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./radiance-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./radiance-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./radiance-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./radiance-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'rhapsody-of-the-seas',
    loadComponent: () => import('./rhapsody-of-the-seas/rhapsody-of-the-seas.page').then( m => m.RhapsodyOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./rhapsody-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./rhapsody-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./rhapsody-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./rhapsody-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'serenade-of-the-seas',
    loadComponent: () => import('./serenade-of-the-seas/serenade-of-the-seas.page').then( m => m.SerenadeOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./serenade-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./serenade-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarote',
    loadComponent: () => import('./serenade-of-the-seas/camarote/camarote.page').then( m => m.CamarotePage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./serenade-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'spectrum-of-the-seas',
    loadComponent: () => import('./spectrum-of-the-seas/spectrum-of-the-seas.page').then( m => m.SpectrumOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./spectrum-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./spectrum-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./spectrum-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./spectrum-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'vision-of-the-seas',
    loadComponent: () => import('./vision-of-the-seas/vision-of-the-seas.page').then( m => m.VisionOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./vision-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./vision-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./vision-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./vision-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'wonder-of-the-seas',
    loadComponent: () => import('./wonder-of-the-seas/wonder-of-the-seas.page').then( m => m.WonderOfTheSeasPage)
  },
  {
    path: 'descripcion',
    loadComponent: () => import('./wonder-of-the-seas/descripcion/descripcion.page').then( m => m.DescripcionPage)
  },
  {
    path: 'quehacer',
    loadComponent: () => import('./wonder-of-the-seas/quehacer/quehacer.page').then( m => m.QuehacerPage)
  },
  {
    path: 'camarotes',
    loadComponent: () => import('./wonder-of-the-seas/camarotes/camarotes.page').then( m => m.CamarotesPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./wonder-of-the-seas/reservar/reservar.page').then( m => m.ReservarPage)
  }
];