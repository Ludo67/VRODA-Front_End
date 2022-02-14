import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AddformComponent } from './addform/addform.component';
import { ProductComponent } from './product/product.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  //{path: "", component: NavbarComponent},
  {path: 'home', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products/update/:id/:id2', component: UpdateProductFormComponent},
  {path: 'products/title/:title', component: ProductsearchComponent},
  {path: 'addProduct', component: AddformComponent},
  {path: 'home/addProduct', component: AddformComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
