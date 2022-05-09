import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = "";
  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = {name: '', message: ''}; // for firbase error handle

  constructor(private firebaseService: FirebaseService, private router: Router) {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.name, this.email, this.password)) {
      this.firebaseService.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase"
          //this.router.navigate(['/userinfo'])
          this.router.navigate(['/home'])
        }).catch(_error => {
        this.error = _error
        this.router.navigate(['/public/register'])
      })
    }
  }

  validateForm(name: string, email: string, password: string) {
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
