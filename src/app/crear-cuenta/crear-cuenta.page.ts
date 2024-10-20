import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  regForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public loadingController: LoadingController, public authService: AuthenticationService, public router : Router) { }
    ngOnInit(){
      this.regForm = this.formBuilder.group({
          fullname: ['', [Validators.required]],
          email: ['', [
            Validators.required,
            Validators.email,
            Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
          ]],
          password: ['', [
            Validators.required,
            Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
          ]]
      })
   }

   get errorControl(){
    return this.regForm.controls;
   }

   async signUp(){
    const loading = await this.loadingController.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password)

      if(user){
        loading.dismiss()
        this.router.navigate(['/login'])

      }else{
        console.log('provide correct value');

      }
    }else{
      alert('Datos no validos')
      loading.dismiss()
    }
   }
}
