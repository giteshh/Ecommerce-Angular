import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './pages/header/header.component';
import {ProductMenuComponent} from "./pages/product-menu/product-menu.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
{
  path: '',
    component: HomeComponent, children: [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomePageComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'productMenu', component: ProductMenuComponent},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
