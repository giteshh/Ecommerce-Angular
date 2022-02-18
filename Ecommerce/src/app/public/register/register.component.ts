import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicService} from "../public.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  invalidCredentials = true;

  registerForm: FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required, Validators.minLength(4)]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private publicService: PublicService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.publicService.register(this.registerForm.value).subscribe((response) => {
      // this.sessionService.setSession(response);
    }, () => {
      this.invalidCredentials = true;
    });
  }

  // toggleHidePassword() {
  //   this.hidePassword = !this.hidePassword;
  //   // console.log(this.hidePassword);
  //   const element = document.getElementById('registrationPassword');
  //   if (element) {
  //     element.setAttribute('type', this.hidePassword ? 'password' : 'text');
  //   }
  // }

}
