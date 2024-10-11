import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-radiance-of-the-seas',
  templateUrl: './radiance-of-the-seas.page.html',
  styleUrls: ['./radiance-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RadianceOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
