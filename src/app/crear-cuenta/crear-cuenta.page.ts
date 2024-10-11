import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule, ReactiveFormsModule]
})
export class CrearCuentaPage implements OnInit {
  ionicForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public loadingController: LoadingController, public authService: AuthenticationService) { }
    ngOnInit(){
      this.ionicForm = this.formBuilder.group({
          fullname: ['', [Validators.required]],
          email: ['', [
            Validators.required,
            Validators.email,
            Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
          ]],
          password: ['', [
            Validators.required,
            Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
          ]]
      })
   }

   get errorControl(){
    return this.ionicForm.controls;
   }

   async signUp(){
    const loading = await this.loadingController.create();
    await loading.present();
    if(this.ionicForm?.valid){
      //const user = await this.authService.registerUser(email, password)
    }
   }
}
