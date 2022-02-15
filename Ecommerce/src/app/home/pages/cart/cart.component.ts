import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../home.service";
import {products} from "../../../../assets/data/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product: any = products;
  items = this.homeService.getItems();
  id = 0;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
  }

  clearCart(){
    this.homeService.clearCart();
  }

  // delete a specific item from cart
  // delete(id: number) {
  //   this.product = this.product.filter((item: { id: number; }) => item.id !== id);
  // }
}
