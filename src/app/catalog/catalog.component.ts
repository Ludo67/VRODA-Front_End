import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Input, OnChanges , Output , EventEmitter } from '@angular/core';
import { ProductEntity } from '../product';
import { ProductService } from '../product.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  roles!: string;
  isLoggedIn = false;
  public products: ProductEntity[] =[];
  public product!: ProductEntity;
  
  constructor(private productService: ProductService) { }
  constructor(private productService: ProductService,
    private tokenStorageService: TokenStorageService) { }

    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles.toString();
  }
  this.getProducts();
}

public getProducts(): void{
  this.productService.getProducts().subscribe(
    (response: ProductEntity[]) =>{
      this.products=response;
    },
    (error: HttpErrorResponse)=>{
      alert (error.message);
    }
    );
}

public sortItems(products: ProductEntity[]):void{

  var e = (document.getElementById("filter") as HTMLSelectElement).value;
  console.log("Filter Option:"+e);

  switch(e){
    case ("priceAsc"):{
      products.sort((a,b) => a.price < b.price ? -1: 1);
      break;
    }
    case ("priceDsc"):{
      products.sort((a,b) => a.price > b.price ? -1: 1);
      break;
    }
    case ("nameAsc"):{
      products.sort((a,b) => a.title < b.title ? -1: 1);
      break;
    }
    case ("nameDsc"):{
      products.sort((a,b) => a.title > b.title ? -1: 1);
      break;
    }

    case ("noFilter"):{
      this.getProducts();
      break;
    }

    default:{

      break;
    }
  }

  
}

}
