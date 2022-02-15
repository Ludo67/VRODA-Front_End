import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductEntity,ProductEntityClass } from '../product';
import { Cart } from '../cart';
import { render } from 'creditcardpayments/creditCardPayments';
import { ThrowStmt } from '@angular/compiler';

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

      // render(
      //   {
      //     id: "#paypal",
      //     currency: "CAD",
      //     value: "100.00",
      //     onApprove: (details) => {
      //       alert("Transaction Successful");
      //     }
      //   }
      // );

     }

    products: any;
    product: any;
    updatedProduct : any;

    ngOnInit(){
      this.getCartProduct();
      //this.render();
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
  delivery !: number;
  total !: number;
  message !: string;

 public calculateAmount(products: ProductEntityClass[]): void{
  
  this.sum = products.reduce((sum, product) => sum + (product.price*product.quantity), 0);

  this.taxes = this.sum* 0.15;

  var e = (document.getElementById("delivery") as HTMLSelectElement).value;
  console.log("Delivery Option:"+e);

  switch(e){
    case ("Free"):{
      this.delivery = 0;
      break;
    }
    case ("Plus"):{
      this.delivery = 5;
      break;
    }
    case ("Express"):{
      this.delivery = 15;
      break;
    }
    default:{

      break;
    }
  }


  this.total = this.sum+this.taxes+ this.delivery;

  // console.log("Sum of articles "+ this.sum);
  document.getElementById('sumText').innerHTML = this.sum.toFixed(2) + ' $';
  document.getElementById('taxText').innerHTML = this.taxes.toFixed(2)+ ' $';
  document.getElementById('totText').innerHTML = this.total.toFixed(2); 
 
 }


 public render():void{
   let totalVal:string;

   let button =document.getElementById('checkout');
   button.style.display ='none';

  //  if(Number(document.getElementById('totText').innerHTML) <100.00){
  //   totalVal= document.getElementById('totText').innerHTML.substring(0,5);
  //  }

  //  if(Number(document.getElementById('totText').innerHTML) >= 100.00){
  //   totalVal= document.getElementById('totText').innerHTML.substring(0,6);
  //  }

  //  alert(totalVal);

  totalVal= document.getElementById('totText').innerHTML;
    render(
    {
      id: "#paypal",
      currency: "CAD",
      value: totalVal,
      onApprove: (details:any) => {
        alert("Transaction Successful");
        document.getElementById("emailSubmit").click();
      }
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
