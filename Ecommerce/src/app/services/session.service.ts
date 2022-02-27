import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {TokenResponseInterface, UserInterface} from "../public/public.interface";

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

  getCart(): any {
    return JSON.parse(<string>localStorage.getItem('cart'));
  }

  addToCart(cart: any) {
    let arr = [];
    if (localStorage.getItem('cart')) {
      arr = JSON.parse(<string>localStorage.getItem('cart')) || [];
    }
    arr.push(cart);
    localStorage.setItem('cart', JSON.stringify(arr));
  }


}

