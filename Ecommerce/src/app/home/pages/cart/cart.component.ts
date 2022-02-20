import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../../../assets/data/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product: Product[] = [];
  items = this.homeService.getItems();

  constructor(private homeService: HomeService) {
    this.getCartList();

    // this.setCartItem(this.product);
  }


  ngOnInit(): void {
  }

  // setCartItem(product: any): void {
  //   localStorage.setItem('product', product);
  // }

  getCartList(): void {
    this.homeService.getCartItemList().subscribe((response) => {
      console.log(response)
      this.product = response;
    });
  }

  clearCart() {
    this.homeService.clearCart();
  }

}
