import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../../../assets/data/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  product: Product[] = [];
  items = this.homeService.getItems();

  constructor(private homeService: HomeService) {

  }

  clearCart() {
    window.alert('All items will be removed from Cart. Are you sure ?');
    this.items = [];
  }

  removeCartItem(index: number) {
    this.homeService.removeItem(index);
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

}
