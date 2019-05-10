import { Component, OnInit } from '@angular/core';
import {ProductSearchService} from '../services/ProductSearchService';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(private productService: ProductSearchService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      console.log(JSON.stringify(data));
      
   });

  }

}
