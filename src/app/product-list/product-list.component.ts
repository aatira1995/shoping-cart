import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  heading ="Product List";
  products: any;
  cartButton = {
    text : 'ADD CART',
    style : 'cart-button'
  };
  addButton = {
    text : '+',
    style : 'add-button'
  };
  reduceButton = {
    text : '-',
    style : 'reduce-button'
  }
  value = 0;
  quantity = 0;
  total = 0;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products["default"];
      this.appendValueToProducts();
    });
  }

  appendValueToProducts(){
    this.products.forEach(element => {
      element.value = 0;
    });
  }

  increaseCartItem(id){
    this.products.forEach(element => {
      if(element.pid == id){
        element.value += 1;
      }
    });
    this.updateTotalQuantity();
    this.updateTotalPrice();
  }

  reduceCartItem(id){
    this.products.forEach(element => {
      if(element.pid == id){
        element.value -= 1;
        element.value > 0 ? element.value = element.value : element.value = 0;
      }
    });
    this.updateTotalQuantity();
    this.updateTotalPrice();
  }

  updateTotalQuantity(){
    let totalQuantity = 0;
    this.products.forEach(element => {
      totalQuantity += element.value;
    });
    this.quantity = totalQuantity;
  }

  updateTotalPrice(){
    let totalAmount = 0;
    this.products.forEach(element => {
      if(element.value > 0){
        totalAmount += (element.mrf * element.value);
      }
     });
     this.total = totalAmount;
  }
}
