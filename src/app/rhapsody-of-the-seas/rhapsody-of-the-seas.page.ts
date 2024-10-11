import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rhapsody-of-the-seas',
  templateUrl: './rhapsody-of-the-seas.page.html',
  styleUrls: ['./rhapsody-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RhapsodyOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
