import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navigator-of-the-seas',
  templateUrl: './navigator-of-the-seas.page.html',
  styleUrls: ['./navigator-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NavigatorOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
