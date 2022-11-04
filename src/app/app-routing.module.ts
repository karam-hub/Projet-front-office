import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent },
  {path:"Login", component:LoginComponent},
  {path:"AddP", component:ProduitComponent},
  {path:"AddF", component:FournisseurComponent},
  {path:"", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
