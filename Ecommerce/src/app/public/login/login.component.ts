import { Component, OnInit } from '@angular/core';
import {PublicService} from "../public.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentials = false;

  loginForm: FormGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private publicService: PublicService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.publicService.login(this.loginForm.value).subscribe((response) => {
      // this.sessionService.setSession(response);
    }, () => {
      this.invalidCredentials = true;
    });
  }
}
