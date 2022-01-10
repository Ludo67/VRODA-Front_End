import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AddformComponent } from './addform/addform.component';
const routes: Routes = [
  //{path: "", component: NavbarComponent},
  {path: 'home', component: CatalogComponent},
  {path: 'logout', component: CatalogComponent},
  {path: 'aboutus', component: CatalogComponent},
  {path: 'cart', component: CatalogComponent},
  {path: 'addProduct', component: AddformComponent},
  {path: 'home/addProduct', component: AddformComponent},
  {path: '', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
