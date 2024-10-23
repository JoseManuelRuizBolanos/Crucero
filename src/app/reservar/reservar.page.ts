import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ReservasService } from '../reservas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule, ReactiveFormsModule ]
})
export class ReservarPage  {
  cruceros=[
    {
      id: 1,
      name: 'Adventure of the Seas'
    }, 
    {
      id: 2,
      name: 'Allure of the Seas'
    }, 
    {
      id: 3,
      name: 'Anthem of the Seas'
    },
    {
      id: 4,
      name: 'Brilliance of the Seas'
    },
    {
      id: 5,
      name: 'Enchantment of the Seas'
    },
    {
      id: 6,
      name: 'Explorer of the Seas'
    },
    {
      id: 7,
      name: 'Freedom of the Seas'
    },
    {
      id: 8,
      name: 'Grandeur of the Seas'
    },
    {
      id: 9,
      name: 'Harmony of the Seas'
    },
    {
      id: 10,
      name: 'Icon of the Seas'
    },
    {
      id: 11,
      name: 'Independence of the Seas'
    },
    {
      id: 12,
      name: 'Jewel of the Seas'
    },
    {
      id: 13,
      name: 'Liberty of the Seas'
    },
    {
      id: 14,
      name: 'Mariner of the Seas'
    },
    {
      id: 15,
      name: 'Navigator of the Seas'
    },
    {
      id: 16,
      name: 'Oasis of the Seas'
    },
    {
      id: 17,
      name: 'Odyssey of the Seas'
    },
    {
      id: 18,
      name: 'Ovation of the Seas'
    },
    {
      id: 19,
      name: 'Quantum of the Seas'
    },
    {
      id: 20,
      name: 'Radiance of the Seas'
    },
    {
      id: 21,
      name: 'Rhapsody of the Seas'
    },
    {
      id: 22,
      name: 'Serenade of the Seas'
    },
    {
      id: 23,
      name: 'Spectrum of the Seas'
    },
    {
      id: 24,
      name: 'Star of the Seas'
    },
    {
      id: 25,
      name: 'Symphony of the Seas'
    },
    {
      id: 26,
      name: 'Utopia of the Seas'
    },
    {
      id: 27,
      name: 'Vision of the Seas'
    },
    {
      id: 28,
      name: 'Voyager of the Seas'
    },
    {
      id: 29,
      name: 'Wonder of the Seas'
    }
  ]

  lugares = [
    {
      id: 1,
      name: 'Alaska'
    },
    {
      id: 2,
      name: 'Asia'
    },
    {
      id: 3,
      name: 'Australia y Nueva Zelanda'
    },
    {
      id: 4,
      name: 'Canada y Nueva Inglaterra'
    },
    {
      id: 5,
      name: 'Canal de Panamá'
    },
    {
      id: 6,
      name: 'El Caribe'
    },
    {
      id: 7,
      name: 'Europa'
    },
    {
      id: 8,
      name: 'Hawái'
    },
    {
      id: 9,
      name: 'Las Bahamas'
    },
    {
      id: 10,
      name: 'México'
    },
    {
      id: 11,
      name: 'Pacífico Noroeste'
    },
    {
      id: 12,
      name: 'Pacífico Sur'
    },
    {
      id: 13,
      name: 'Transatlántico'
    },
    {
      id: 14,
      name: 'Transpacífico'
    }
  ]

  puertos = [
    {
      id: 1,
      name: 'Barcelona, España'
    },
    {
      id: 2,
      name: 'Roma (Civitavecchia), Italia'
    },
    {
      id: 3,
      name: 'Rávena (Venecia), Italia'
    },
    {
      id: 4,
      name: 'Southampton, Inglaterra'
    },
    {
      id: 5,
      name: 'Baltimore, Maryland'
    },
    {
      id: 6,
      name: 'Boston, Massachusetts'
    },
    {
      id: 7,
      name: 'Cape Liberty (Nueva York), Nueva Jersey'
    },
    {
      id: 8,
      name: 'Fort Lauderdale, Florida'
    },
    {
      id: 9,
      name: 'Galveston, Texas'
    },
    {
      id: 10,
      name: 'Los Ángeles, California'
    },
    {
      id: 11,
      name: 'Miami, Florida'
    },
    {
      id: 12,
      name: 'Nueva Orleans, Luisiana'
    },
    {
      id: 13,
      name: 'Oahu (Honolulú), Hawái'
    },
    {
      id: 14,
      name: 'Orlando (Puerto Cañaveral), Florida'
    },
    {
      id: 15,
      name: 'Puerto de cruceros de Vancouver, (Columbia Británica)'
    },
    {
      id: 16,
      name: 'San Diego, California'
    },
    {
      id: 17,
      name: 'Seattle, Washington'
    },
    {
      id: 18,
      name: 'Seward, Alaska'
    },
    {
      id: 19,
      name: 'Tampa, Florida'
    },
    {
      id: 20,
      name: 'Cartagena, Colombia'
    },
    {
      id: 21,
      name: 'Colón, Panamá'
    },
    {
      id: 22,
      name: 'San Juan, Puerto Rico'
    },
    {
      id: 23,
      name: 'Brisbane, Australia'
    },
    {
      id: 24,
      name: 'Sídney, Australia'
    }
  ]

  camarotes = [
    {
      id: 1,
      name: 'Camarotes Interiores',
    },
    {
      id: 2,
      name: 'Vista al Océano',
    },
    {
      id: 3,
      name: 'Camarotes con Balcón',
    },
    {
      id: 4,
      name: 'Sunset Corner Suite',
    },
    {
      id: 5,
      name: 'Panoramic Suite',
    },
    {
      id: 6,
      name: 'Infinity Balconies',
    },
  ]

  lugaresOasis = [
    { id: 2, name: 'Asia' },
    { id: 10, name: 'México' }
  ];
  
  puertosOasis = [
    { id: 2, name: 'Roma (Civitavecchia), Italia' },
    { id: 9, name: 'Galveston, Texas' }
  ];

  onCruceroChange() {
    const cruceroSeleccionado = this.reservaForm.value.nombreCrucero;
  
    if (cruceroSeleccionado && cruceroSeleccionado.name === 'Oasis of the Seas') {
      this.lugares = this.lugaresOasis;
      this.puertos = this.puertosOasis;
    } else {
      this.lugares = [
        {
          id: 1,
          name: 'Alaska'
        },
        {
          id: 2,
          name: 'Asia'
        },
        {
          id: 3,
          name: 'Australia y Nueva Zelanda'
        },
        {
          id: 4,
          name: 'Canada y Nueva Inglaterra'
        },
        {
          id: 5,
          name: 'Canal de Panamá'
        },
        {
          id: 6,
          name: 'El Caribe'
        },
        {
          id: 7,
          name: 'Europa'
        },
        {
          id: 8,
          name: 'Hawái'
        },
        {
          id: 9,
          name: 'Las Bahamas'
        },
        {
          id: 10,
          name: 'México'
        },
        {
          id: 11,
          name: 'Pacífico Noroeste'
        },
        {
          id: 12,
          name: 'Pacífico Sur'
        },
        {
          id: 13,
          name: 'Transatlántico'
        },
        {
          id: 14,
          name: 'Transpacífico'
        }
      ];
      this.puertos = [
        {
          id: 1,
          name: 'Barcelona, España'
        },
        {
          id: 2,
          name: 'Roma (Civitavecchia), Italia'
        },
        {
          id: 3,
          name: 'Rávena (Venecia), Italia'
        },
        {
          id: 4,
          name: 'Southampton, Inglaterra'
        },
        {
          id: 5,
          name: 'Baltimore, Maryland'
        },
        {
          id: 6,
          name: 'Boston, Massachusetts'
        },
        {
          id: 7,
          name: 'Cape Liberty (Nueva York), Nueva Jersey'
        },
        {
          id: 8,
          name: 'Fort Lauderdale, Florida'
        },
        {
          id: 9,
          name: 'Galveston, Texas'
        },
        {
          id: 10,
          name: 'Los Ángeles, California'
        },
        {
          id: 11,
          name: 'Miami, Florida'
        },
        {
          id: 12,
          name: 'Nueva Orleans, Luisiana'
        },
        {
          id: 13,
          name: 'Oahu (Honolulú), Hawái'
        },
        {
          id: 14,
          name: 'Orlando (Puerto Cañaveral), Florida'
        },
        {
          id: 15,
          name: 'Puerto de cruceros de Vancouver, (Columbia Británica)'
        },
        {
          id: 16,
          name: 'San Diego, California'
        },
        {
          id: 17,
          name: 'Seattle, Washington'
        },
        {
          id: 18,
          name: 'Seward, Alaska'
        },
        {
          id: 19,
          name: 'Tampa, Florida'
        },
        {
          id: 20,
          name: 'Cartagena, Colombia'
        },
        {
          id: 21,
          name: 'Colón, Panamá'
        },
        {
          id: 22,
          name: 'San Juan, Puerto Rico'
        },
        {
          id: 23,
          name: 'Brisbane, Australia'
        },
        {
          id: 24,
          name: 'Sídney, Australia'
        }
      ];
    }
  }

  compareFn(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  calcularCamarotes() {
    const huespedes = this.reservaForm.value.huespedes || 0;
    const numeroCamarotes = Math.ceil(Number(huespedes) / 4).toString();
    this.reservaForm.patchValue({ numeroCamarotes });
  }

  reservaForm = new FormGroup({
    fechaInicio: new FormControl("", Validators.required),
    lugares: new FormControl("", [Validators.required]),
    puertoSalida: new FormControl("", [Validators.required]),
    noches: new FormControl("", [Validators.required]),
    huespedes: new FormControl("", [Validators.required]),
    nombreCamarote: new FormControl("", [Validators.required]),
    numeroCamarotes: new FormControl("1", [Validators.required]),
    nombreCrucero: new FormControl(null, [Validators.required])
  })

  async onSubmit(){
    const datos = this.reservaForm.value
    await this.reservasService.guardarReserva(
      this.reservaForm.value.fechaInicio, 
      this.reservaForm.value.lugares, 
      this.reservaForm.value.puertoSalida,
      this.reservaForm.value.noches, 
      this.reservaForm.value.huespedes, 
      this.reservaForm.value.nombreCamarote, 
      this.reservaForm.value.numeroCamarotes, 
      this.reservaForm.value.nombreCrucero)
  }

  async alertaReserva() {
    const alert = await this.alertController.create({
      header: '¡Crucero Reservado Con Éxito!',
      message: 'Si quieres ver o cancelar tus reservas, lo puedes hacer desde tu perfil',
      buttons: ['Action'],
    });

    await alert.present();
  }
  
  constructor(public menu: MenuController, public reservasService: ReservasService, private alertController: AlertController) { 
    this.menuActive();
    this.lugares = this.lugares;
    this.puertos = this.puertos;
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

}
