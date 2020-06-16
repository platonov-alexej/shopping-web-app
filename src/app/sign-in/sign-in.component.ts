import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm: FormGroup;
  constructor() {
    this.signInForm = new FormGroup({
              
      "userEmail": new FormControl ("", [
                          Validators.required, 
                          Validators.email 
                      ]),
      "userPassword": new FormControl() 
    });
   }

   submit(){
    console.log(this.signInForm);
}

}
