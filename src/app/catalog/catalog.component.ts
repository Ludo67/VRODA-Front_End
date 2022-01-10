import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: Product[] =[];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getProducts();
}

public getProducts(): void{
  this.productService.getProducts().subscribe(
    (response: Product[]) =>{
      this.products=response;
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    );
}

}
