import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, walk, bed, boat } from 'ionicons/icons';

@Component({
  selector: 'app-utopia-of-the-seas',
  templateUrl: './utopia-of-the-seas.page.html',
  styleUrls: ['./utopia-of-the-seas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class UtopiaOfTheSeasPage  {

  constructor() { 
    addIcons({ book, walk, bed, boat });
  }
  

}
