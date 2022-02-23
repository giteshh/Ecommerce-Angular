import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {products, Product} from "../../../../assets/data/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  products = products;


  constructor(private homeService: HomeService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.homeService.getProducts().subscribe(data => this.products = data);
    // this.http.get('/assets/data/product.ts').subscribe(products => this.products = products)
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

