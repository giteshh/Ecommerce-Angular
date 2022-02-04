import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './pages/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'header', component: HeaderComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
