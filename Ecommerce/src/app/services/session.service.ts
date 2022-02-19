import {Injectable} from '@angular/core';
import {TokenResponseInterface, UserInterface} from "../public/public.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) {
  }

  navigate(url: string): void {
    this.router.navigate([url]).then();
  }

  isSessionExist(): boolean {
    return !!localStorage.getItem('access')
  }

  setSession(data: TokenResponseInterface): void {
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.navigate('/home/Home');
  }

  endSession(): void {
    localStorage.clear();
    this.navigate('/public/login');
  }

  getUser(): UserInterface | any {

    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    } else {
      return {
        name: '',
        email: '',
      };
    }

  }

  getToken(): string {
    const token = localStorage.getItem('access');
    return token ? token : '';
  }

  deleteToken(): void {
    localStorage.removeItem('access');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh');
  }

  setAccessToken(token: string): void {
    localStorage.setItem('access', token);
  }

}

