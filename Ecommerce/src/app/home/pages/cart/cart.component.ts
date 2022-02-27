import {Component} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../../../assets/data/product";
import {SessionService} from "../../../services/session.service";

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

  product: Product | any;
  total = 0;
  quantity = 1;
  cartItemTotal = 0;
  cartProducts: cartItems[] = [];
  price = 0;
  existingProduct = false;
  showButton = false;
  cart: Product | any;

  constructor(private homeService: HomeService,
              private sessionService: SessionService) {
    this.getCartItems();
  }

  // get all the items added to cart from localstorage
  getCartItems() {
    this.cart = this.sessionService.getCart();
    if(this.cart){
      this.doTotal();
      this.showButton = this.cart.length > 0;
    } else {
      this.showButton = false;
    }

  }

  // clear all items from cart and localstorage
  clearCart() {
    alert('All items will be removed from Cart. Are you sure ?');
    localStorage.clear();
    this.getCartItems();
  }

  // remove selected item from cart and localstorage
  removeCartItem(index: number) {
    // this.homeService.removeItem(index);
    // this.cart = this.sessionService.getCart();
    // localStorage.removeItem();
    this.sessionService.removeFromCart(index);
    this.getCartItems();
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    alert('Your product has been added to the your Wishlist!');
  }

  cartTotal(product: any) {
    this.total = this.price * this.quantity;
  }

  discount(){

  }

  doTotal() {
    this.cart.forEach((product:any) => {
      this.total += product.price * 1;
    });
  }
}



