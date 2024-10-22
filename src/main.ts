import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
     provideHttpClient(),
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     provideIonicAngular(),
     provideAuth(() => getAuth()),
     provideFirestore(() => getFirestore()),
     provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({
       "projectId":"crucero-b4a54","appId":"1:355434933873:web:5d7619036f2a0e8b0375d0","storageBucket":"crucero-b4a54.appspot.com","apiKey":"AIzaSyDefg38__0c8njZg05q5BlVs_0Nml9R3-k","authDomain":"crucero-b4a54.firebaseapp.com","messagingSenderId":"355434933873","measurementId":"G-46MCFYC9Q9"
     })), 
     provideAuth(() => getAuth()),
  ],
});