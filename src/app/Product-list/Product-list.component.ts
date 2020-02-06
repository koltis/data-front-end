import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-Product-list',
  templateUrl: './Product-list.component.html',
  styleUrls: ['./Product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService:ProductService) {
    
  }
  ngOnInit() {
  }

}
