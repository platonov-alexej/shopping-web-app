import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { SignInComponent } from './sign-in/sign-in.component';

import { ReactiveFormsModule }   from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AuthService } from "./auth/auth.service";
import { SignUpComponent } from './sign-up/sign-up.component';

var config = {
  apiKey: "AIzaSyC_PugLXNt71yGUl7ZfqoDgJKgDkqd_mEE",
      authDomain: "shopping-backend-firebas-e22e1.firebaseapp.com",
      databaseURL: "https://shopping-backend-firebas-e22e1.firebaseio.com",
      projectId: "shopping-backend-firebas-e22e1",
      storageBucket: "shopping-backend-firebas-e22e1.appspot.com",
      messagingSenderId: "431089870058",
      appId: "1:431089870058:web:261163f75863cc43f1a393",
      measurementId: "G-567KHFJCYS"
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
