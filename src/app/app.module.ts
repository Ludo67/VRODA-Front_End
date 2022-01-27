import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddformComponent } from './addform/addform.component';
import { ProductComponent } from './product/product.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogComponent,
    AddformComponent,
    ProductComponent,
    ProductsearchComponent,
    UpdateProductFormComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
