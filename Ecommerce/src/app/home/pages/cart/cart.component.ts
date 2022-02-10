import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.homeService.getItems();

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
  }

  clearCart(){
    this.homeService.clearCart();
  }
}
