import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, walk, bed, boat } from 'ionicons/icons';

@Component({
  selector: 'app-icon-of-the-seas',
  templateUrl: './icon-of-the-seas.page.html',
  styleUrls: ['./icon-of-the-seas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class IconOfTheSeasPage  {

  constructor() { 
    addIcons({ book, walk, bed, boat });
  }

  

}
