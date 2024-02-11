import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: object[] = [];
  public product: object = {};

  constructor() {}

  public assignNewProductProp(prop: string, propValue: string | boolean | number){    
    return this.product[`${prop}`] = propValue;
  }

  public addProduct(){
    this.products.push(this.product);
    
    this.product = {};
    console.log(this.products);
  }

  public getProducts(){
    return this.products;
  }

}
