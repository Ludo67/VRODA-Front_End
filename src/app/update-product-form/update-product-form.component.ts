import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
//import { Product } from './Product';
import { ProductEntity, ProductEntityClass } from '../product';
import { Product } from '../addform/Product';
@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {

  constructor(private Activatedroute:ActivatedRoute, 
    private router:Router,
    private productService:ProductService) { }

    sub: any;
    id: any;
    product: any;

    pform!: FormGroup;
    updatedProduct = new ProductEntityClass("",0,0,"",0,"")


  ngOnInit(): void {
    
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProductById(this.id)
      this.pform = new FormGroup({

        'productId' : new FormControl(this.id),
        'categoryId' : new FormControl(null, Validators.required),
        'title' : new FormControl(null, Validators.required),
        'price' : new FormControl(null, Validators.required),
        'quantity' : new FormControl(null, Validators.required),
        'description' : new FormControl(null, Validators.required)
  
    });      
  });

}

onSubmit():void{
  this.updatedProduct = new ProductEntityClass(
  this.id,
  this.pform.get(['categoryId'])?.value,
  this.pform.get(['quantity'])?.value,
  this.pform.get(['title'])?.value,
  this.pform.get(['price'])?.value,
  this.pform.get(['description'])?.value
  
  )
  

alert("Product Updated Successfully!");
this.updateProduct(this.updatedProduct);
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

public updateProduct(updatedProduct: ProductEntityClass): void{

  this.productService.updateProduct(updatedProduct).subscribe(
    (response:Product)=>{
        this.product=response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )
  
  
}


}