import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AddformComponent } from './addform/addform.component';
import { ProductComponent } from './product/product.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  {path: 'home', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products/update/:id/:id2', component: UpdateProductFormComponent,
  canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER,ROLE_CLERK' || 'ROLE_CLERK,ROLE_USER' || 'ROLE_CLERK'
    }
  },
  {path: 'products/title/:title', component: ProductsearchComponent},
  {path: '', component: CatalogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'addProduct', component: AddformComponent,
  canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER,ROLE_CLERK' || 'ROLE_CLERK,ROLE_USER' || 'ROLE_CLERK'
    }
    
  },
  {path: 'home/addProduct', redirectTo: '/addProduct', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
