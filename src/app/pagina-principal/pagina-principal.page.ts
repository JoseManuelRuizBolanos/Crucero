import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class PaginaPrincipalPage {
  cruceros=[
    {
      id: 1,
      title: 'Adventure of the Seas',
      subtitle: 'Una manera más audaz de realizar una escapada',
      route: '/adventure-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/oasis/oasis-of-the-seas-labadee-haiti-aft.jpg?$1440x600$'
    }, 
    {
      id: 2,
      title: 'Allure of the Seas',
      subtitle: 'Espectáculos y éxitos',
      route: '/allure-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/allure/allure-of-the-seas-naples-italy.jpg?$1440x600$'
    }, 
    {
      id: 3,
      title: 'Anthem of the Seas',
      subtitle: 'Eleva el nivel más allá',
      route: '/anthem-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ship/anthem-of-the-seas/image/anthem-of-the-seas-aerial-stern-sailing.jpg?$1440x600$'
    },
    {
      id: 4,
      title: 'Brilliance of the Seas',
      subtitle: 'Enciende tu espíritu viajero',
      route: '/brilliance-of-the-seas',
      thumbnail: 'https://www.cruiseswithfriends.com/images/opengraph/royal-caribbean-brilliance-of-the-seas.png'
    },
    {
      id: 5,
      title: 'Enchantment of the Seas',
      subtitle: 'Mejora tu escapada',
      route: '/enchantment-of-the-seas',
      thumbnail: 'https://www.ship-technology.com/wp-content/uploads/sites/8/2017/10/enchant3.jpg'
    },
    {
      id: 6,
      title: 'Explorer of the Seas',
      subtitle: 'Todo en la isla',
      route: '/explorer-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Explorer_of_the_Seas%2C_Fremantle%2C_2015_%2803%29.JPG'
    },
    {
      id: 7,
      title: 'Freedom of the Seas',
      subtitle: 'Aventura asombrosa',
      route: '/freedom-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/freedom/freedom-of-the-seas-drone-aerial-aft.jpg?$1440x600$'
    },
    {
      id: 8,
      title: 'Grandeur of the Seas',
      subtitle: 'Una escapada diferente',
      route: '/grandeur-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/grandeur/grandeur-of-the-seas-sailing.jpg?$1440x600$'
    },
    {
      id: 9,
      title: 'Harmony of the Seas',
      subtitle: 'Apúnta a la aventura de navegar en familia',
      route: '/harmony-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Harmony_of_the_Seas_%28ship%2C_2016%29_001.jpg/640px-Harmony_of_the_Seas_%28ship%2C_2016%29_001.jpg'
    },
    {
      id: 10,
      title: 'Icon of the Seas',
      subtitle: 'Conoce a the Icon of Vacations',
      route: '/icon-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/icon/assets/icon-of-the-seas-hero-cruises-vacaion-reveal-sunset-night.jpg?$1440x600$'
    },
    {
      id: 11,
      title: 'Independence of the Seas',
      subtitle: 'Una experiencia audaz',
      route: '/independence-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/INDEPENDENCE_OF_THE_SEAS_%2843623180144%29.jpg/1200px-INDEPENDENCE_OF_THE_SEAS_%2843623180144%29.jpg'
    },
    {
      id: 12,
      title: 'Jewel of the Seas',
      subtitle: 'Profundiza en nuevos descubrimientos',
      route: '/jewel-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ship/jewel-of-the-seas/jewel-of-the-seas-grenada-docked-harbor.jpg?$1440x600$'
    },
    {
      id: 13,
      title: 'Liberty of the Seas',
      subtitle: 'Rompe el hielo',
      route: '/liberty-of-the-seas',
      thumbnail: 'https://www.yatravet.es/wp-content/uploads/2024/02/Liberty-of-the-Seas-1.jpg'
    },
    {
      id: 14,
      title: 'Mariner of the Seas',
      subtitle: 'Aventuras audaces en el horizonte',
      route: '/mariner-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/content/ship/mariner-of-the-seas/overview/hero-pic/mariner-MA-night-lights.jpg?$1440x600$'
    },
    {
      id: 15,
      title: 'Navigator of the Seas',
      subtitle: 'Aventuras en la costa oeste',
      route: '/navigator-of-the-seas',
      thumbnail: 'https://www.cruisemapper.com/images/ships/704-large-f64eac11f2cd8f0efa196f8ad173178e.jpg'
    },
    {
      id: 16,
      title: 'Oasis of the Seas',
      subtitle: 'Más grande. Más impresionante. Innovador',
      route: '/oasis-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/oasis/oasis-of-the-seas-amplified-aerial.jpg?$1440x600$'
    },
    {
      id: 17,
      title: 'Odyssey of the Seas',
      subtitle: 'Recorre el mundo con audacia',
      route: '/odyssey-of-the-seas',
      thumbnail: 'https://www.cruisemapper.com/images/ships/1862-6403cb2e42c.jpg'
    },
    {
      id: 18,
      title: 'Ovation of the Seas',
      subtitle: 'Más grande. Más impresionante. Rumbo a baja',
      route: '/ovation-of-the-seas',
      thumbnail: 'https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheader/ship_533_1280x960-rci_ov-aerialsnyatsea067_640x260_mobhdr.jpg'
    },
    {
      id: 19,
      title: 'Quantum of the Seas',
      subtitle: 'Una nueva frontera favorita',
      route: '/quantum-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Quantum_of_the_Seas_-_Wedel_04.jpg'
    },
    {
      id: 20,
      title: 'Radiance of the Seas',
      subtitle: 'Paseo por la naturaleza',
      route: '/radiance-of-the-seas',
      thumbnail: 'https://www.royalcaribbeanpresscenter.com/digital_pk_assets/17/hero_images/RCI-Radiance-CPM-Header_1590507440.jpg'
    },
    {
      id: 21,
      title: 'Rhapsody of the Seas',
      subtitle: 'Tu boleto a aventuras exóticas',
      route: '/rhapsody-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/rhapsody/assets/rhapsody-of-the-seas-alaska-sailing-hero.jpg?$1440x600$'
    },
    {
      id: 22,
      title: 'Serenade of the Seas',
      subtitle: 'Aventuras de costa a costa',
      route: '/serenade-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/serenade/serenade-of-the-seas-alaska-landscape-aerial.jpg?$1440x600$'
    },
    {
      id: 23,
      title: 'Spectrum of the Seas',
      subtitle: 'El primer crucero de la clase quantum ultra',
      route: '/spectrum-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/61/SPECTRUM_OF_THE_SEAS_20190608-2_%28cropped%29.jpg'
    },
    {
      id: 24,
      title: 'Star of the Seas',
      subtitle: 'The next Icon',
      route: '/star-of-the-seas',
      thumbnail: 'https://www.royalcaribbeanpresscenter.com/digital_pk_assets/44/hero_images/23-RCC-ST-DPK-Header-10223_1696512894.jpg'
    },
    {
      id: 25,
      title: 'Symphony of the Seas',
      subtitle: 'Aventura revolucionaria',
      route: '/symphony-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/symphony/symphony-of-the-seas-new-york-sailing-city-skyline.jpg?$1440x600$'
    },
    {
      id: 26,
      title: 'Utopia of the Seas',
      subtitle: 'El fin de semana más grande del mundo',
      route: '/utopia-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/utopia/utopia-of-thee-seas-night-aerial-aft-sea-day.jpg?$1440x600$'
    },
    {
      id: 27,
      title: 'Vision of the Seas',
      subtitle: 'Lánzate a la aventura para ver el mundo con otros ojos',
      route: '/vision-of-the-seas',
      thumbnail: 'https://www.cruisemapper.com/images/ships/612-large-f76a89f0cb91bc419542ce9fa43902dc.jpg'
    },
    {
      id: 28,
      title: 'Voyager of the Seas',
      subtitle: 'Esto es una aventura intensa',
      route: '/voyager-of-the-seas',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voyager_of_the_Seas_in_Sydney.jpg'
    },
    {
      id: 29,
      title: 'Wonder of the Seas',
      subtitle: 'Las mejores vacaciones familiares en Orlando',
      route: '/wonder-of-the-seas',
      thumbnail: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/wonder/wonder-of-the-seas-sunset-aerial.jpg?$960x320$'
    }
  ]
  

  public results = [...this.cruceros];

  searchTerm: string='';
  user: any
  constructor(public authService:AuthenticationService, public router: Router, public menu: MenuController) { 
    this.user = authService.getProfile()
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

  handleInput(event){
    this.searchTerm = event.target.value;
    this.getSearchData();
    const query = event.target.value.toLowerCase();
    this.results = this.cruceros.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }

  getSearchData(){
    console.log('Searching for:', this.searchTerm);
  }

  async logout(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }
}