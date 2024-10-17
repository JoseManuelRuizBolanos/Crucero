import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  fechaInicio: string;
  lugares: string;
  puertaSalida: string;
  noches: string;
  huespedes: string;
  nombreCamarote: string;
  numeroCamarotes: string;
  nombreCrucero: string;

  async onSubmit(){
    this.fechaInicio = this.reservaForm.value.fechaInicio
    this.lugares = this.reservaForm.value.lugares
    this.puertaSalida = this.reservaForm.value.puertoSalida
    this.noches = this.reservaForm.value.noches
    this.huespedes = this.reservaForm.value.huespedes
    this.nombreCamarote = this.reservaForm.value.nombreCamarote
    this.numeroCamarotes = this.reservaForm.value.numeroCamarotes
    this.nombreCrucero = this.reservaForm.value.nombreCrucero
  }
  
  constructor(public menu: MenuController) { 
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

}
