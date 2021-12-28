import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
const routes: Routes = [
  //{path: "", component: NavbarComponent},
  {path: 'home', component: CatalogComponent},
  {path: 'logout', component: CatalogComponent},
  {path: 'aboutus', component: CatalogComponent},
  {path: 'cart', component: CatalogComponent},
  {path: '', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
