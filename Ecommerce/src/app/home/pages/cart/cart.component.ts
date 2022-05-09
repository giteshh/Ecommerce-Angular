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
  discount = 0;
  totalMrp = 0;
  totalPrice = 0;
  cartProducts: cartItems[] = [];
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
    if (this.cart) {
      this.doTotal();
      this.showButton = this.cart.length > 0;
    } else {
      this.showButton = false;
    }
  }

  // clear all items from cart and localstorage
  clearCart() {
    if (confirm("All items will be removed from Cart. Are you sure ?")) {
      localStorage.clear();
      this.getCartItems();
    } else {
    }

  }

  addQty(index: number, e: any) {
    this.sessionService.addQtyToCart(index, e.target.value);
    this.getCartItems();
  }

  // remove selected item from cart and localstorage
  removeCartItem(index: number) {
    this.sessionService.removeFromCart(index);
    this.getCartItems();
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    alert('Your product has been added to the your Wishlist!');
  }

  // adding mrp of items in the cart
  getMRP(cart: any) {
    this.totalMrp = 0;
    this.cart.forEach((product: Product) => {
      this.totalMrp += product.mrp;
    })
  }

  // difference between MRP and price of items
  getDiscount(cart: any) {
    this.cart.forEach((product: Product) => {
      this.discount = product.mrp - product.price;
    })
  }

  doTotal() {
    this.total = 0;
    this.getMRP(this.cart);
    this.getDiscount(this.cart);
    this.cart.forEach((product: Product) => {
      let finalPrice = product.price * product.quantity;    //default quantity is 1
      this.total += finalPrice;
    });
  }

  // placing order and removing items from localstorage
  placeOrder() {
    localStorage.clear();
    this.getCartItems();
    alert("Your order is placed successfully ");
  }
}



