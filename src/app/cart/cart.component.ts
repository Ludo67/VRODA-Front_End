import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductEntity } from '../product';

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
    ngOnInit(){
      this.getCartProduct();
  }
  

  public getCartProduct(): void{
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
        alert("Product has been successfully delete!");
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
