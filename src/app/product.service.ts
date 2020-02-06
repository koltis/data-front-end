import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL:string='http://localhost:3000'
  Products:Product[]=[]
  isLoading:Boolean=true
  Error=''

constructor(private http:HttpClient) {
  this.getProductsList()
}

  getProductsList(){
      this.isLoading = true
      this.http.get(`${this.BASE_URL}/products`).subscribe(
        (ress:Product[])=>{
          this.Products=ress
          this.isLoading = false
        },
        (err)=>{
          console.log(err)
          this.isLoading = false
        }
      )
  }
  getCustomProducts(Product){
    this.isLoading = true
    this.Products= []
    this.http.get(`${this.BASE_URL}/products/${Product}`).subscribe(
      (ress:Product[])=>{
        this.Products=ress
        this.isLoading = false
      },
      (err)=>{
          this.Error=err
          this.isLoading = false
      }
    )
}
}
