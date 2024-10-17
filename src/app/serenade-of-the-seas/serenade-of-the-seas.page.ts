import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, walk, bed } from 'ionicons/icons';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-serenade-of-the-seas',
  templateUrl: './serenade-of-the-seas.page.html',
  styleUrls: ['./serenade-of-the-seas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class SerenadeOfTheSeasPage  {

  constructor(public menu: MenuController) { 
    addIcons({ book, walk, bed });
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }
}
