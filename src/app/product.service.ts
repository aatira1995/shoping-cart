import { Injectable } from '@angular/core';
import * as products from '../../data/products.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : Observable<any>{
    return of(products);
  }
}
