import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guias-cruceros',
  templateUrl: './guias-cruceros.page.html',
  styleUrls: ['./guias-cruceros.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class GuiasCrucerosPage  {

  constructor() { }

}
