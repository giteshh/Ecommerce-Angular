// import {Injectable} from '@angular/core';
// import {ShopOwnerInterface, TokenResponseInterface} from "../public/public.interface";
// import {Router} from "@angular/router";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SessionService {
//
//   constructor(private router: Router) {
//   }
//
//   navigate(url: string): void {
//     this.router.navigate([url]).then();
//   }
//
//   isSessionExist(): boolean {
//     return !!localStorage.getItem('access')
//   }
//
//   setSession(data: TokenResponseInterface): void {
//     localStorage.setItem('access', data.access);
//     localStorage.setItem('refresh', data.refresh);
//     localStorage.setItem('shop_owners', JSON.stringify(data.shop_owners));
//     this.navigate('/dashboard/home');
//   }
//
//   endSession(): void {
//     localStorage.clear();
//     this.navigate('/public/login');
//   }
//
//   getUser(): ShopOwnerInterface | any {
//
//     const user = localStorage.getItem('shop_owners');
//
//     if (user) {
//       return JSON.parse(user);
//     } else {
//       return {
//         name: '',
//         email: '',
//         role: 1,
//         mobile: '',
//         shop_name: ''
//       };
//     }
//
//   }
//
//   getToken(): string {
//     const token = localStorage.getItem('access');
//     return token ? token : '';
//   }
//
//   deleteToken(): void {
//     localStorage.removeItem('access');
//   }
//
//   getRefreshToken(): string | null {
//     return localStorage.getItem('refresh');
//   }
//
//   setAccessToken(token: string): void {
//     localStorage.setItem('access', token);
//   }
//
// }
