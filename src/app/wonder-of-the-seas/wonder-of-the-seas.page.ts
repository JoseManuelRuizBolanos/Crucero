import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-wonder-of-the-seas',
  templateUrl: './wonder-of-the-seas.page.html',
  styleUrls: ['./wonder-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WonderOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
