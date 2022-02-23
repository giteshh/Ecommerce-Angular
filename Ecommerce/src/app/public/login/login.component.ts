import {Component, OnInit} from '@angular/core';
import {PublicService} from "../public.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private publicService: PublicService,
              private formBuilder: FormBuilder,
              private firebaseService: FirebaseService,
              private router: Router) {
  }

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = {name: '', message: ''}; // for firbase error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.firebaseService.loginWithEmail(this.email, this.password)
        .then(() => {
          // this.router.navigate(['/userinfo'])
          this.router.navigate(['/home'])
        }).catch(_error => {
        this.error = _error
        this.router.navigate(['/public/login'])
      })
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
