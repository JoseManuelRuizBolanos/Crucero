import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-jewel-of-the-seas',
  templateUrl: './jewel-of-the-seas.page.html',
  styleUrls: ['./jewel-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JewelOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
