import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule, ReactiveFormsModule ]
})
export class ReservarPage  {

  reservaForm = new FormGroup({
    fechaInicio: new FormControl("", [Validators.required]),
    lugares: new FormControl("", [Validators.required]),
    puertoSalida: new FormControl("", [Validators.required]),
    noches: new FormControl("", Validators.required),
    huespedes: new FormControl("", Validators.required),
    nombreCamarote: new FormControl("", Validators.required),
    numeroCamarotes: new FormControl("", Validators.required),
    nombreCrucero: new FormControl("", Validators.required)
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
  
  constructor(public menu: MenuController, public reservasService: ReservasService) { 
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

}
