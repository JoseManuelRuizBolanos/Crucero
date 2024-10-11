import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recordar-contrasena',
  templateUrl: './recordar-contrasena.page.html',
  styleUrls: ['./recordar-contrasena.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule]
})
export class RecordarContrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
