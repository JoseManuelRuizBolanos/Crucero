import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, walk, bed, boat } from 'ionicons/icons';

@Component({
  selector: 'app-enchantment-of-the-seas',
  templateUrl: './enchantment-of-the-seas.page.html',
  styleUrls: ['./enchantment-of-the-seas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class EnchantmentOfTheSeasPage  {

  constructor() { 
    addIcons({ book, walk, bed, boat });
  } 

}
