import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mariner-of-the-seas',
  templateUrl: './mariner-of-the-seas.page.html',
  styleUrls: ['./mariner-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MarinerOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
