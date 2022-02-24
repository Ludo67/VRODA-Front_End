import {ProductEntity, ProductEntityClass} from './product';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class CartService{
    private apiUrl = environment.apiBaseUrl3;

    constructor(private http: HttpClient) {}

    public getCartItems(): Observable<ProductEntity[]>{
        return this.http.get<ProductEntity[]>(`${this.apiUrl}/cart`);
    }
    
    public addProductToCart(product: ProductEntity): Observable<ProductEntity>{
        return this.http.post<ProductEntity>(`${this.apiUrl}/cart/addToCart`, product);
    }

    public deleteCartProductById(product_id: string): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/cart/delete/${product_id}`);
    }

    public updateCart(product: ProductEntityClass): Observable<ProductEntityClass>{
        return this.http.put<ProductEntityClass>(`${this.apiUrl}/cart/update/${product.productId}`, product);
    }
    
}