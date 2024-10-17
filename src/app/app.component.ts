import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule],
})
export class AppComponent implements OnInit{
  paletteToggle = false;
  constructor(public authService:AuthenticationService, public router: Router) {}

  async logout(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-schema: dark)');

    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  initializeDarkPalette(isDark) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(ev) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  toggleDarkPalette(shouldAdd){
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd)
  }
}
