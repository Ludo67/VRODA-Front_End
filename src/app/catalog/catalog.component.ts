import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: Product[] =[];
  public product!: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getProducts();
}

public getProducts(): void{
  this.productService.getProducts().subscribe(
    (response: Product[]) =>{
      this.products=response;
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    );
}

public getProductById(product_id: string): void{

  this.productService.getByProductId(product_id).subscribe(
    (response:Product)=>{
      this.product=response;
      alert("Product ID: " + this.product.productId +
      "\nCategory ID: " + this.product.categoryId +
      "\nTitle: " + this.product.title +
      "\nPrice: " + this.product.price +
      "\nQuantity: " + this.product.quantity +
      "\nDescription: " + this.product.description)
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )

 
}

public deleteProductById(product_id: string): void{
    
  alert("Deleted Product Id is " + product_id);
  this.productService.deleteProduct(product_id).subscribe(
    (response: void) =>{
      this.refresh();
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    );
}
refresh(): void {
  window.location.reload();
}

}
