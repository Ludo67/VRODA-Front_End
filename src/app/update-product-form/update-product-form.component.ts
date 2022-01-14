import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './Product';

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
    private updatedProduct: Product = new Product();

  ngOnInit(): void {
    
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.product = this.getProductById(this.id);

      this.pform = new FormGroup({

        'category_id' : new FormControl(null, Validators.required),
        'title' : new FormControl(null, Validators.required),
        'price' : new FormControl(null, Validators.required),
        'quantity' : new FormControl(null, Validators.required),
        'description' : new FormControl(null, Validators.required)
  
    });
  });
}

onSubmit():void{
  //this.updatedProduct = new Product(this.pform.value);
alert("Product Updated Successfully!");
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
/*
public updateProduct(): void{
  this.productService.updateProduct(this.updatedProduct).subscribe(
    (response:Product)=>{
      this.product=response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )
}
*/
}