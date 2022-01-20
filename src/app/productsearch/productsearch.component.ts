import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
  public products: ProductEntity[] =[];
  constructor(private Activatedroute:ActivatedRoute, 
    private router:Router,
    private productService:ProductService) { }

    sub: any;
    title: any;
    product: any;

  ngOnInit(): void {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.getProductsByTitle(this.title);

    });

  }

public getProductsByTitle(title: string): void{
  this.productService.getProductsByTitle(title).subscribe(
    (response: ProductEntity[]) =>{
      this.products=response;
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    );
}

}
