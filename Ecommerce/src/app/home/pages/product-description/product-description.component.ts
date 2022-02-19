import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../../assets/data/product";


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  products: Product[] = [];
  product: Product;
  productId = 0;

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {

    this.product = this.homeService.product;
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['productId'];
      this.homeService.detail(this.productId).subscribe(product => {
        this.product = product;
      });
    });

  }

  ngOnInit() {

  }

  // move product into shopping cart
  addToCart(product: Product) {
    this.homeService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

}

