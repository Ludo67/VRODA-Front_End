import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductEntity,ProductEntityClass } from '../product';
import { Cart } from '../cart';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private Activatedroute:ActivatedRoute, 
    private router:Router,
    private cartService:CartService,
    ) {

      render(
        {
          id: "#paypal",
          currency: "CDN",
          value: "100.00",
          onApprove: (details) => {
            alert("Transaction Successful");
          }
        }
      );

     }

    products: any;
    product: any;
    updatedProduct : any;

    ngOnInit(){
      this.getCartProduct();
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

  sum !: number;
  taxes !: number;
  total !: number;

 public calculateAmount(products: ProductEntityClass[]): void{
  
  this.sum = products.reduce((sum, product) => sum + (product.price*product.quantity), 0);

  this.taxes = this.sum* 0.15;

  this.total = this.sum+this.taxes;

  // console.log("Sum of articles "+ this.sum);
  document.getElementById('sumText').innerHTML = this.sum.toFixed(2) + ' $';
  document.getElementById('taxText').innerHTML = this.taxes.toFixed(2)+ ' $';
  document.getElementById('totText').innerHTML = this.total.toFixed(2)+ ' $'; 
 
 }

 public checkout():void{
  // alert("Sum of articles "+ this.sum.toFixed(2) + "\ntaxes: " + this.taxes.toFixed(2)+ "\ntotal: "+ this.total.toFixed(2));


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

  updatedProduct.quantity =+ document.querySelectorAll('input')[index].value;

  if((updatedProduct.quantity==0)){
    this.deleteCartProductById(updatedProduct.productId);
  }

  this.cartService.updateCart(updatedProduct).subscribe(
    (response:Cart)=>{
        console.log("The quantity has been changed to "+ updatedProduct.quantity);
        this.product=response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )
}
}
