import {Product} from './Product';
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

    public createProduct(product: Product): Observable<Product>{
        return this.http.post<Product>(`${this.apiUrl}/newProduct/`, product);
    }

}