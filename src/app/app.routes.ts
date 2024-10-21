import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login', 
    loadComponent: () => import ('./login/login.page').then(m => m.LoginPage)
  },
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    ]
  },
  {
    path: 'grandeur-of-the-seas',
    loadComponent: () => import('./grandeur-of-the-seas/grandeur-of-the-seas.page').then((m) => m.GrandeurOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./grandeur-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionGrandeurPageModule),
      },
      {
        path : 'quehacer',
        loadChildren: () => import('./grandeur-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerGrandeurPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./grandeur-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesGrandeurPageModule),
      }
    ] 
  },
  {
    path: 'harmony-of-the-seas',
    loadComponent: () => import('./harmony-of-the-seas/harmony-of-the-seas.page').then((m) => m.HarmonyOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./harmony-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionHarmonyPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./harmony-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerHarmonyPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./harmony-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesHarmonyPageModule),
      }
    ]
  },
  {
    path: 'independence-of-the-seas',
    loadComponent: () => import('./independence-of-the-seas/independence-of-the-seas.page').then((m) => m.IndependenceOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./independence-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionIndependencePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./independence-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerIndependencePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./independence-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesIndependencePageModule),
      }
    ]
  },
  {
    path: 'jewel-of-the-seas',
    loadComponent: () => import('./jewel-of-the-seas/jewel-of-the-seas.page').then((m) => m.JewelOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./jewel-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionJewelPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./jewel-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerJewelPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./jewel-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesJewelPageModule),
      }
    ]
  },
  {
    path: 'liberty-of-the-seas',
    loadComponent: () => import('./liberty-of-the-seas/liberty-of-the-seas.page').then((m) => m.LibertyOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./liberty-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionLibertyPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./liberty-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerLibertyPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./liberty-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesLibertyPageModule),
      }
    ]
  },
  {
    path: 'mariner-of-the-seas',
    loadComponent: () => import('./mariner-of-the-seas/mariner-of-the-seas.page').then((m) => m.MarinerOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./mariner-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionMarinerPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./mariner-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerMarinerPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./mariner-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesMarinerPageModule),
      }
    ]
  },
  {
    path: 'navigator-of-the-seas',
    loadComponent: () => import('./navigator-of-the-seas/navigator-of-the-seas.page').then((m) => m.NavigatorOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./navigator-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionNavigatorPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./navigator-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerNavigatorPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./navigator-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesNavigatorPageModule),
      }
    ]
  },
  {
    path: 'ovation-of-the-seas',
    loadComponent: () => import('./ovation-of-the-seas/ovation-of-the-seas.page').then((m) => m.OvationOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./ovation-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionOvationPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./ovation-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerOvationPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./ovation-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesOvationPageModule),
      }
    ]
  },
  {
    path: 'quantum-of-the-seas',
    loadComponent: () => import('./quantum-of-the-seas/quantum-of-the-seas.page').then((m) => m.QuantumOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion'
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./quantum-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionQuantumPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./quantum-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerQuantumPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./quantum-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesQuantumPageModule),
      }
    ]
  },
  {
    path: 'radiance-of-the-seas',
    loadComponent: () => import('./radiance-of-the-seas/radiance-of-the-seas.page').then((m) => m.RadianceOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./radiance-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionRadiancePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./radiance-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerRadiancePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./radiance-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesRadiancePageModule),
      }
    ]
  },
  {
    path: 'rhapsody-of-the-seas',
    loadComponent: () => import('./rhapsody-of-the-seas/rhapsody-of-the-seas.page').then((m) => m.RhapsodyOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./rhapsody-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionRhapsodyPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./rhapsody-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerRhapsodyPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./rhapsody-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesRhapsodyPageModule),
      }
    ]
  },
  {
    path: 'serenade-of-the-seas',
    loadComponent: () => import('./serenade-of-the-seas/serenade-of-the-seas.page').then((m) => m.SerenadeOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./serenade-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionSerenadePageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./serenade-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerSerenadePageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./serenade-of-the-seas/camarote/camarote.page.module').then((m) => m.CamarotesSerenadePageModule),
      }
    ]
  },
  {
    path: 'spectrum-of-the-seas',
    loadComponent: () => import('./spectrum-of-the-seas/spectrum-of-the-seas.page').then((m) => m.SpectrumOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./spectrum-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionSpectrumPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./spectrum-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerSpectrumPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./spectrum-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesSpectrumPageModule),
      }
    ]
  },
  {
    path: 'vision-of-the-seas',
    loadComponent: () => import('./vision-of-the-seas/vision-of-the-seas.page').then((m) => m.VisionOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./vision-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionVisionPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./vision-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerVisionPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./vision-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesVisionPageModule),
      }
    ]
  },
  {
    path: 'wonder-of-the-seas',
    loadComponent: () => import('./wonder-of-the-seas/wonder-of-the-seas.page').then((m) => m.WonderOfTheSeasPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'descripcion',
      },
      {
        path: 'descripcion',
        loadChildren: () => import('./wonder-of-the-seas/descripcion/descripcion.page.module').then((m) => m.DescripcionWonderPageModule),
      },
      {
        path: 'quehacer',
        loadChildren: () => import('./wonder-of-the-seas/quehacer/quehacer.page.module').then((m) => m.QuehacerWonderPageModule),
      },
      {
        path: 'camarotes',
        loadChildren: () => import('./wonder-of-the-seas/camarotes/camarotes.page.module').then((m) => m.CamarotesWonderPageModule),
      }
    ]
  },
  {
    path: 'recordar-contrasena',
    loadComponent: () => import('./recordar-contrasena/recordar-contrasena.page').then( m => m.RecordarContrasenaPage)
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
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./reservar/reservar.page').then( m => m.ReservarPage)
  },
  {
    path: 'preguntas1',
    loadComponent: () => import('./preguntas-frecuentes/preguntas1/preguntas1.page').then( m => m.Preguntas1Page)
  },
  {
    path: 'preguntas2',
    loadComponent: () => import('./preguntas-frecuentes/preguntas2/preguntas2.page').then( m => m.Preguntas2Page)
  },
  {
    path: 'preguntas3',
    loadComponent: () => import('./preguntas-frecuentes/preguntas3/preguntas3.page').then( m => m.Preguntas3Page)
  },
  {
    path: 'preguntas4',
    loadComponent: () => import('./preguntas-frecuentes/preguntas4/preguntas4.page').then( m => m.Preguntas4Page)
  },
  {
    path: 'preguntas5',
    loadComponent: () => import('./preguntas-frecuentes/preguntas5/preguntas5.page').then( m => m.Preguntas5Page)
  },
  {
    path: 'preguntas6',
    loadComponent: () => import('./preguntas-frecuentes/preguntas6/preguntas6.page').then( m => m.Preguntas6Page)
  },
  {
    path: 'preguntas7',
    loadComponent: () => import('./preguntas-frecuentes/preguntas7/preguntas7.page').then( m => m.Preguntas7Page)
  },
  {
    path: 'preguntas8',
    loadComponent: () => import('./preguntas-frecuentes/preguntas8/preguntas8.page').then( m => m.Preguntas8Page)
  },
  {
    path: 'preguntas9',
    loadComponent: () => import('./preguntas-frecuentes/preguntas9/preguntas9.page').then( m => m.Preguntas9Page)
  },
  {
    path: 'preguntas10',
    loadComponent: () => import('./preguntas-frecuentes/preguntas10/preguntas10.page').then( m => m.Preguntas10Page)
  },
  {
    path: 'preguntas11',
    loadComponent: () => import('./preguntas-frecuentes/preguntas11/preguntas11.page').then( m => m.Preguntas11Page)
  },
  {
    path: 'preguntas12',
    loadComponent: () => import('./preguntas-frecuentes/preguntas12/preguntas12.page').then( m => m.Preguntas12Page)
  }
];