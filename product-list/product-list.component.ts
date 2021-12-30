import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products: Product[] = [];
  // displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-price', 'demo-description'];
  // dataSource = this.products;
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }
}
