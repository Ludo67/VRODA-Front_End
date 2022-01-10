import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from './Product';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  constructor(
    private productService: ProductService,
    
    ) { }

    pform!: FormGroup;
    private newProduct: Product = new Product();

  ngOnInit(): void {
    this.pform = new FormGroup({

      'category_id' : new FormControl(null, Validators.required),
      'title' : new FormControl(null, Validators.required),
      'price' : new FormControl(null, Validators.required),
      'quantity' : new FormControl(null, Validators.required),
      'description' : new FormControl(null, Validators.required)

  });
  }
  onSubmit(): void{
    
    alert("Product added successfully!");
    console.log(this.pform.value);
    
    this.addProduct()
    
  }

  public addProduct(): void{
    this.newProduct = new Product(this.pform.value);
    alert(this.newProduct);
    console.log(this.newProduct);
    
    this.productService.createProduct(this.newProduct).subscribe(
    (response: Product)=>{
      this.newProduct=response;
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    )
    this.pform.reset();
    
  }
}
