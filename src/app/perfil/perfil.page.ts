import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class PerfilPage implements OnInit {
  user: any
  email: any
  constructor(public authService:AuthenticationService, public router: Router, public menu: MenuController) { 
    this.user = authService.getProfile()
    this.menuActive();
  }

  menuActive(){
    this.menu.enable(true, 'menu');
  }

  ngOnInit(): void{
    this.authService.getProfile().then(user => {
      this.email = user?.email;
      console.log(user?.email);
    }).catch(error => {
      console.error('Error getting user profile:', error)
    })
  }

  async logout(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }

}
