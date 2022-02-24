import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../../../assets/data/product";

interface cartItems {
  id: number,
  name: string,
  price: number,
  mrp: number,
  quantity: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  product: Product[] = [];
  // items = this.homeService.getItems();
  items;
  total = 0;
  quantity = 0;
  cartItemTotal = 0;
  cartProducts: cartItems[] = [];
  price = 0;

  constructor(private homeService: HomeService) {
    this.getItems();
    // this.doTotal();
    this.items = this.homeService.getItems();
  }

  clearCart() {
    window.alert('All items will be removed from Cart. Are you sure ?');
    this.items = [];
  }

  removeCartItem(index: number) {
    this.homeService.removeItem(index);
  }

  getItems() {
    return this.product;
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

  cartTotal(product: any) {
   this.total = this.price * this.quantity;
  }

  // doTotal() {
  //   this.items.forEach(product => {
  //     this.cartItemTotal += this.total;
  //   });
  // }
}



