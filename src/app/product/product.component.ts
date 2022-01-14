import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private Activatedroute:ActivatedRoute, 
              private router:Router,
              private productService:ProductService) { }

  sub: any;
  id: any;
  product: any;

  ngOnInit(): void {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProductById(this.id);

    });
  }
  
  public getProductById(product_id: string): void{

    this.productService.getByProductId(product_id).subscribe(
      (response:Product)=>{
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

  public updateProduct(id: string): void{
    this.router.navigate(['/products/update/', id]);
  }
}
