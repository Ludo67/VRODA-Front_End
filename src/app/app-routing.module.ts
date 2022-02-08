import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AddformComponent } from './addform/addform.component';
import { ProductComponent } from './product/product.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  //{path: "", component: NavbarComponent},
  {path: 'home', component: CatalogComponent},
  {path: 'account', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products/update/:id/:id2', component: UpdateProductFormComponent},
  {path: 'products/title/:title', component: ProductsearchComponent},
  {path: 'addProduct', component: AddformComponent},
  {path: 'home/addProduct', component: AddformComponent},
  {path: '', component: CatalogComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
