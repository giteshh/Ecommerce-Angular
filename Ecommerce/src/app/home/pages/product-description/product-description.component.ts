import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  productId: number = 0;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    rate: 0,
    quantity: 0
  }

  // items: Product[] = [];

  products: Product[] = [];

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {
this.getDetail(this.product)
  }

  getDetail(product: Product) {
    this.homeService
      .detail(product)
      .subscribe(
        () => (this.products = this.products.filter((p) => p.id !== product.id))

      );
    console.log(product.id == 2)
  }
}

