import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm: FormGroup;
  constructor(public  authService:  AuthService) {
    this.signInForm = new FormGroup({
              
      "userEmail": new FormControl ("", [
                          Validators.required, 
                          Validators.email 
                      ]),
      "userPassword": new FormControl() 
    });
   }

}
