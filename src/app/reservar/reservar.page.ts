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
  
  fechaInicio: any;
  lugares: any;
  puertaSalida: any;
  noches: any;
  huespedes: any;
  nombreCamarote: any;
  numeroCamarotes: any;
  nombreCrucero: any;

  async onSubmit(){
    const datos = this.reservaForm.value
  }
  
  constructor(public menu: MenuController) { 
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

}
