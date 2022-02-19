import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../assets/data/product";
import {HttpService} from "../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private productObject: string = "/assets/data/product.ts";

  items: Product[] = [];
  wishlistItems: Product[] = [];

  constructor(private http: HttpClient,
              private httpService: HttpService) {
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productObject);
  // }

  getProducts(): Observable<any> {
    return this.httpService.get('/productlist/productlist/');
  }

  detail(product: Product): Observable<Product> {
    const url = `${this.productObject}/${product.id}`;
    return this.http.get<Product>(url);
  }

  // cart service start
  addToCart(product: Product) {
    this.items.push(product);

  }

  addToCartNew(product: Product): Observable<Product> {
    return this.httpService.post('/cart/', product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // cart service end

  //wishlist services
  addToWishlist(product: Product) {
    this.wishlistItems.push(product);
  }

  getWishlistItems() {
    return this.wishlistItems;
  }

  clearWishlist() {
    this.wishlistItems = [];
    return this.wishlistItems;
  }

  // wishlist services end

}
