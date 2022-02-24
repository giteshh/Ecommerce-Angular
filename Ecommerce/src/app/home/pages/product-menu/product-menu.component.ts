import {Component} from '@angular/core';
import {HomeService} from "../../home.service";
import {products, Product} from "../../../../assets/data/product";

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent {

  products = products;


  constructor(private homeService: HomeService) {
  }

  //move products to wishlist
  addToWishlist(product: Product) {
    this.homeService.addToWishlist(product);
    window.alert('Your product has been added to the your Wishlist!');
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}

