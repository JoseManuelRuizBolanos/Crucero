import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.page.html',
  styleUrls: ['./preguntas-frecuentes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class PreguntasFrecuentesPage  {
  alertButtons = ['Aceptar'];
  constructor() { }

}
