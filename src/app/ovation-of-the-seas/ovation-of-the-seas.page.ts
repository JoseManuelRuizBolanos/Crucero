import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ovation-of-the-seas',
  templateUrl: './ovation-of-the-seas.page.html',
  styleUrls: ['./ovation-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OvationOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
