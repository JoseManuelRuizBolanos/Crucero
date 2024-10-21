import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, walk, bed, trophy } from 'ionicons/icons';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-utopia-of-the-seas',
  templateUrl: './utopia-of-the-seas.page.html',
  styleUrls: ['./utopia-of-the-seas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class UtopiaOfTheSeasPage  {

  constructor(public menu: MenuController) { 
    addIcons({ book, walk, bed, trophy });
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }
}
