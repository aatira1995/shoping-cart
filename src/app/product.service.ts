import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async getProducts() : Promise<any>{
    try{
      const response = await fetch('../assets/data/products.json');
      const products = response.json();
      return products;
    }catch(error){
      console.log(error);
    }
  }
}
