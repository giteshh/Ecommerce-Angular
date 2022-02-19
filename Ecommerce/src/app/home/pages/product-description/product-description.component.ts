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

  // product: Product[] =[];
  product: Product | any;

  key: string = '';
  value: string = '';

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    // this.product = product.find(product => product.id === productIdFromRoute);

    // this.homeService.getProducts().subscribe(data => this.products = data);
  }

  // move product into shopping cart
  addToCart(product: Product) {
    this.homeService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  // addToCart(product: Product) {
  //   this.homeService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  // addToCart(product: Product) {
  //   this.homeService.addToCartNew(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

}

