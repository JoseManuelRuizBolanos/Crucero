import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas1',
  templateUrl: './preguntas1.page.html',
  styleUrls: ['./preguntas1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class Preguntas1Page  {
  alertButtons = ['Aceptar'];
  constructor(public menu: MenuController) { 
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }
}
