import { Component, OnInit } from '@angular/core';
import {Product, products} from "../../../../assets/data/product";
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
    this.homeService.clearWishlist();
  }
}
