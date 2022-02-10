import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../../product";



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit{

  product: Product | any;



  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // move product into shopping cart
  addToCart(product: Product) {
    this.homeService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}

