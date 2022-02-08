import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Input, OnChanges , Output , EventEmitter } from '@angular/core';
import { ProductEntity } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: ProductEntity[] =[];
  public product!: ProductEntity;
  
  constructor(private productService: ProductService) { }

  ngOnInit(){
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
    default:{

      break;
    }
  }

  
}

    // @Input() totalRecords = 100;  
    // @Input() recordsPerPage = 10;  
  
    // @Output() onPageChange: EventEmitter<number> = new EventEmitter();  
  
    // public pages: number [] = [];  
    // activePage !: number;  
  
    // ngOnChanges(): any {  
    //   // const pageCount = this.getPageCount();  
    //   // this.pages = this.getArrayOfPage(pageCount);  
    //   this.activePage = 1;  
    //   this.onPageChange.emit(1);  
    // }  
  
    // private  getPageCount(): number {  
    //   let totalPage = 0;  
  
    //   if (this.totalRecords > 0 && this.recordsPerPage > 0) {  
    //     const pageCount = this.totalRecords / this.recordsPerPage;  
    //     const roundedPageCount = Math.floor(pageCount);  
  
    //     totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
    //   }  
  
    //   return totalPage;  
    // }  
  
    // private getArrayOfPage(pageCount: number): number [] {  
    //   const pageArray = [];  
  
    //   if (pageCount > 0) {  
    //       for(let i = 1 ; i <= pageCount ; i++) {  
    //         pageArray.push(i);  
    //       }  
    //   }  
  
    //   return pageArray;  
    // }  
  
    // onClickPage(pageNumber: number): void {  
    //     if (pageNumber >= 1 && pageNumber <= this.pages.length) {  
    //         this.activePage = pageNumber;  
    //         this.onPageChange.emit(this.activePage);  
    //     }  
    // } 

}
