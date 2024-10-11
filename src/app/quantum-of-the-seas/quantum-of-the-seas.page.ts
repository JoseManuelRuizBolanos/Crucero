import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quantum-of-the-seas',
  templateUrl: './quantum-of-the-seas.page.html',
  styleUrls: ['./quantum-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuantumOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
