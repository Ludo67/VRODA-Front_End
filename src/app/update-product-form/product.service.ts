import { ProductEntity, ProductEntityClass } from '../product';
import { Product } from './Product';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ProductService{
    private apiUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getProducts(): Observable<ProductEntity[]>{
        return this.http.get<ProductEntity[]>(`${this.apiUrl}/products`);
    }

    public getByProductId(product_id: string): Observable<ProductEntity>{
        return this.http.get<ProductEntity>(`${this.apiUrl}/products/${product_id}`);
    }

    public updateProduct(product: ProductEntityClass): Observable<ProductEntity>{
        return this.http.put<ProductEntity>(`${this.apiUrl}/products/${product.product_id}`, product);
    }

    public createProduct(product: ProductEntity): Observable<ProductEntity>{
        return this.http.post<ProductEntity>(`${this.apiUrl}/newProduct/`, product);
    }

    public deleteProduct(product_id: string): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/products/${product_id}`);
    }

    public getProductsByTitle(title: string): Observable<ProductEntity[]>{
        return this.http.get<ProductEntity[]>(`${this.apiUrl}/products/title/${title}`);
    }


}