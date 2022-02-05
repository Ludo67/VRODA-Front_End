import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductEntity,ProductEntityClass } from '../product';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private Activatedroute:ActivatedRoute, 
    private router:Router,
    private cartService:CartService) { }

    products: any;
    product: any;
    updatedProduct : any;

    ngOnInit(){
      this.getCartProduct();
  }

  public timeout(ms: number) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public getCartProduct(): void{

    // var items = ProductEntity[];
    // items.add(product);

    this.cartService.getCartItems().subscribe(
      (response: ProductEntity[]) =>{
        this.products=response;
      },
      (error: HttpErrorResponse)=>{
        alert (error.message);
      }
      );
  }

  public deleteCartProductById(product_id: string): void{
    
    //alert("Deleted Product Id is " + product_id);
    this.cartService.deleteCartProductById(product_id).subscribe(
      (response: void) =>{
        //alert("Product has been successfully delete!");
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

public updateCart(updatedProduct: ProductEntityClass, index:number): void{

  // let index = this.products.findIndex( product => {
  //   if (product.title === updatedProduct.title) {
  //     return true;
  //   }
  // });

  updatedProduct.quantity =+ document.querySelectorAll('input')[index].value;

  if((updatedProduct.quantity==0)){
    this.deleteCartProductById(updatedProduct.productId);
  }

  this.cartService.updateCart(updatedProduct).subscribe(
    (response:Cart)=>{
        console.log("The quantity has been changed to "+ updatedProduct.quantity);
        document.getElementById('update').innerHTML += '<br>The quantity has been changed to '+ updatedProduct.quantity;
        this.product=response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )

  // document.getElementById('update').innerHTML += '<br>The quantity has been changed to '+ updatedProduct.quantity;
  this.timeout(1000);
  document.getElementById('update').innerHTML += '';
}
}
