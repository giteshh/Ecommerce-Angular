import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import {ProductMenuComponent} from "./pages/product-menu/product-menu.component";
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductMenuComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
