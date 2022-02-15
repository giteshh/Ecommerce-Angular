import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import {ProductMenuComponent} from "./pages/product-menu/product-menu.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDescriptionComponent } from './pages/product-description/product-description.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductMenuComponent,
    HomePageComponent,
    ProductDescriptionComponent,
    CartComponent,
    WishlistComponent,
    MyProfileComponent,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
