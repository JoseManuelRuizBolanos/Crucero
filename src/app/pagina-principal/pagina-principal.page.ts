import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';
import { AppComponent } from '../app.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class PaginaPrincipalPage {

  constructor( ) { }
}