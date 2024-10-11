import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-spectrum-of-the-seas',
  templateUrl: './spectrum-of-the-seas.page.html',
  styleUrls: ['./spectrum-of-the-seas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SpectrumOfTheSeasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
