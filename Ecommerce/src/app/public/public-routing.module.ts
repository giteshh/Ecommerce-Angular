import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {HomePageComponent} from "../home/pages/home-page/home-page.component";
import {HeaderComponent} from "../home/pages/header/header.component";
import {ProductMenuComponent} from "../home/pages/product-menu/product-menu.component";
import {ProductDescriptionComponent} from "../home/pages/product-description/product-description.component";
import {CartComponent} from "../home/pages/cart/cart.component";
import {WishlistComponent} from "../home/pages/wishlist/wishlist.component";
import {PublicComponent} from "./public.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
