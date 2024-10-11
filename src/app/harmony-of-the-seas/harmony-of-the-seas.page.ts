import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-harmony-of-the-seas',
  templateUrl: './harmony-of-the-seas.page.html',
  styleUrls: ['./harmony-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HarmonyOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
