import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { ProductMenuComponent } from './pages/product-menu/product-menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductMenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
