import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule ]
})
export class PaginaPrincipalPage {
  searchTerm: string='';
  user: any
  constructor(public authService:AuthenticationService, public router: Router, public menu: MenuController) { 
    this.user = authService.getProfile()
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

  handleInput(event: any){
    this.searchTerm = event.target.value;
    this.getSearchData();
  }

  getSearchData(){
    console.log('Searching for:', this.searchTerm);
  }

  async logout(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }
}