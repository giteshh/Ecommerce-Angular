import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../../../assets/data/product";

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  products : Product[]=[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getProducts().subscribe(data => this.products = data);
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
