import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ProductEntity } from '../product';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  addedToCart=false;
  constructor(private Activatedroute:ActivatedRoute, 
              private router:Router,
              private productService:ProductService,
              private cartService:CartService,
              private tokenStorageService: TokenStorageService) { }

  roles!: string;
  isLoggedIn = false;
  sub: any;
  id: any;
  product: any;
  productt: any;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles.toString();
}
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProductById(this.id);

    });
  }
  
  public addToCart(productToCart: ProductEntity): void{

    this.cartService.addProductToCart(productToCart).subscribe(
      (response:ProductEntity)=>{
        this.product=response;
        //alert("Product added to cart!")
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
    this.addedToCart=true;
    // document.getElementById('addToCartText').innerHTML += '<br> Item added to Cart!';
  }

  public getProductById(product_id: string): void{

    this.productService.getByProductId(product_id).subscribe(
      (response:ProductEntity)=>{
        this.product=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  
   
  }
  public deleteProductById(product_id: string): void{
    
    //alert("Deleted Product Id is " + product_id);
    this.productService.deleteProduct(product_id).subscribe(
      (response: void) =>{
        alert("Product with Id " + product_id + " has been successfully delete!");
        this.router.navigate(['home']);
      },
      (error: HttpErrorResponse)=>{
        alert (error.message);
      }
      );
  }

  public updateProduct(id: string, id2: string): void{
    this.router.navigate(['/products/update/', id, id2]);
  }

 }
