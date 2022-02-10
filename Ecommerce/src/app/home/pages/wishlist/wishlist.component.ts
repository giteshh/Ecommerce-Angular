import { Component, OnInit } from '@angular/core';
import {Product, products} from "../../product";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../home.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  product: Product | any;

  items = this.homeService.getItems();

  constructor(private route: ActivatedRoute,
              private homeService: HomeService) { }

  ngOnInit() {
    // // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));
    //
    // // Find the product that correspond with the id provided in route.
    // this.product = products.find(product => product.id === productIdFromRoute);
  }

}
