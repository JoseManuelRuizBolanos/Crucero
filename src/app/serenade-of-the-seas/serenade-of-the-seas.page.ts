import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-serenade-of-the-seas',
  templateUrl: './serenade-of-the-seas.page.html',
  styleUrls: ['./serenade-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SerenadeOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
