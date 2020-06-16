import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm: FormGroup;
  constructor(public  authService:  AuthService) {
    this.signUpForm = new FormGroup({
              
      "userEmail": new FormControl ("", [
                          Validators.required, 
                          Validators.email 
                      ]),
      "userPassword": new FormControl() 
    });
   }


}
