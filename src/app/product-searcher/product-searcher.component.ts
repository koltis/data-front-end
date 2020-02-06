import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-searcher',
  templateUrl: './product-searcher.component.html',
  styleUrls: ['./product-searcher.component.css']
})
export class ProductSearcherComponent {
  Product:FormGroup
  constructor(public productService:ProductService,private formBuilder:FormBuilder,private router:Router) {
    this.Product = this.formBuilder.group({
      product_id:''
    })
  }
  onSubmit(){
      this.productService.getCustomProducts(this.Product.value.product_id)
      this.router.navigate(['/'])
  }


}
