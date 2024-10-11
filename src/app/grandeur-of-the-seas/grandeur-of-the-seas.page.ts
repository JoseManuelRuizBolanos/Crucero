import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grandeur-of-the-seas',
  templateUrl: './grandeur-of-the-seas.page.html',
  styleUrls: ['./grandeur-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GrandeurOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
