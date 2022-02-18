import { Injectable } from '@angular/core';
import {HttpService} from "../services/http.service";
import {Observable} from "rxjs";
import {TokenResponseInterface, UserInterface} from "./public.interface";

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private httpService: HttpService) { }

  register(formData: UserInterface): Observable<TokenResponseInterface> {
    return this.httpService.post('/user/user-auth/register/', formData);
  }

  login(formData: UserInterface): Observable<TokenResponseInterface> {
    return this.httpService.post('/user/user-auth/login/', formData);
  }

  token_refresh(formData: any): Observable<any> {
    return this.httpService.post('/user/token/refresh/', formData);
  }

}
