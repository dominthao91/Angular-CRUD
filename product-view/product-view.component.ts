import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
productView: any;
  constructor(private activatedRouter: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getView();
  }
getView(){
    this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
      const id: number = Number(paraMap.get('id'));
      this.productView = this.productService.findById(id);
    });
  }
}
