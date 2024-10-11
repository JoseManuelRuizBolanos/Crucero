import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-liberty-of-the-seas',
  templateUrl: './liberty-of-the-seas.page.html',
  styleUrls: ['./liberty-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LibertyOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
