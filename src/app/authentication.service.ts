import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private auth = inject(Auth);
  constructor(
  ) { }

  async registerUser(email: string, password:string){
    return await createUserWithEmailAndPassword(this.auth, email, password)
  }

  async loginUser(email: string, password: string){
   return await signInWithEmailAndPassword(this.auth, email,password)
  }

  async resetPassword(email: string){
    return await sendPasswordResetEmail(this.auth, email)
  }

  async signOut(){
    return await signOut(this.auth)
  }

  async getProfile():Promise <User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user as User);
        } else {
          resolve(null);
        }
      }, reject);
    })
  }
}
