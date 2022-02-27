import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../../../../assets/data/product";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product: Product | any;
  cart: Product[] | any = [];
  items = products;
  productId = 0;
  products = products;
  existingProduct = false;

  constructor(private homeService: HomeService,
              private sessionService: SessionService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getParams();
  }

  navigate(id: number) {
    this.sessionService.navigate('/home/productDescription/' + id);
    this.findProduct(id);
  }

  findProduct(id: number) {
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === id);

  }

  getParams() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.findProduct(productIdFromRoute);
  }

  // move product into shopping cart
  addToCart(product: Product) {
    this.existingProduct = false;
    // if(this.sessionService.getCart()){
    if (this.sessionService.getCart()) {
      this.cart = this.sessionService.getCart();
      console.log(product.id);
      this.cart.forEach((cart: any) => {
        console.log(cart.id);
        if (cart.id == product.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.sessionService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    } else {
      window.alert('Your product is already exist in cart!');
    }
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

}



