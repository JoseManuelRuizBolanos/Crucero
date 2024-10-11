import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, logOut } from 'ionicons/icons';
 
@Component({
  selector: 'app-voyager-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class DescripcionVoyagerPage  {

  constructor() { 
    addIcons({home, logOut});
  } 

}
