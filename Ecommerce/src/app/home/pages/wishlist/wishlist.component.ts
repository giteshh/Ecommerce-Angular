import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../home.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  product: Product | any;

  wishListItems = this.homeService.getWishlistItems();

  constructor(private route: ActivatedRoute,
              private homeService: HomeService) { }

  ngOnInit() {
  }

  onClearWishlist(){
    window.alert('Saved items will be removed from Wishlist. Are you sure ?');
    this.wishListItems = [];
  }

  removeItem(index: number) {
    this.homeService.removeItem(index);
  }

  addToCart(product: Product) {
    this.homeService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    this.homeService.removeItem(1);
  }
}
