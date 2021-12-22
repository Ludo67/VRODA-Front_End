import {Product} from './product';
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

    public getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.apiUrl}/products`);
    }

    public createProduct(product_id: number,product: Product): Observable<Product>{
        return this.http.post<Product>(`${this.apiUrl}/newProduct/${product_id}`, product);
    }

    // public updateProduct(product Product): Observable<Product>{
    //     return this.http.put<Product[]>(`${this.apiUrl}/newProduct/{product_id}`, product);
    // }

    public deleteProduct(product_id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/products/${product_id}`);
    }


}