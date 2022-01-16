import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './Product';
import { ProductEntity } from '../product';
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
    public product: any;
    public product2: any;
    pform!: FormGroup;
    updatedProduct!: ProductEntity;


  ngOnInit(): void {
    
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.getProductById(this.id));
      this.pform = new FormGroup({

        'product_id' : new FormControl(this.id),
        'category_id' : new FormControl(null, Validators.required),
        'title' : new FormControl(null, Validators.required),
        'price' : new FormControl(null, Validators.required),
        'quantity' : new FormControl(null, Validators.required),
        'description' : new FormControl(null, Validators.required)
  
    });      
  });

}

onSubmit():void{
  
alert("Product Updated Successfully!");
console.log(this.pform.value);
/*this.updatedProduct = new Product(this.pform.value);
this.updateProduct(this.updateProduct);*/
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

public updateProduct(updatedProduct: ProductEntity): void{

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