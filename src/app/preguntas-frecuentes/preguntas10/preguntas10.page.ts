import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas10',
  templateUrl: './preguntas10.page.html',
  styleUrls: ['./preguntas10.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class Preguntas10Page  {
  alertButtons = ['Aceptar'];
  constructor(public menu: MenuController) { 
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }
}