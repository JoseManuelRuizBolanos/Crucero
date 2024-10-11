import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adventure-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ReservarAdventurePage  {
  alertButtons= ['Aceptar'];
  constructor() { }

  

}
