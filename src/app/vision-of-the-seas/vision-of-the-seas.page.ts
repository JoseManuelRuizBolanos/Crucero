import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vision-of-the-seas',
  templateUrl: './vision-of-the-seas.page.html',
  styleUrls: ['./vision-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VisionOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
