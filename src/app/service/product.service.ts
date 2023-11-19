import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable , map} from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  storage = window.localStorage;

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
  addProduct(product: Product[]): void {
    this.storage.setItem('products', JSON.stringify(product));
  }

  getProductByID(id: number): Observable<Product | undefined> {
    
    return this.http
      .get<Product[]>(`assets/data.json`)
      .pipe(map((products) => products.find((p) => p.id === id)));
  }
}
