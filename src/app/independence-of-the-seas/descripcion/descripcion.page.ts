import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-independence-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule]
})
export class DescripcionIndependencePage  {

  constructor() { }

}
