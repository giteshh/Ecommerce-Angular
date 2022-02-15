import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product, products} from "../../assets/data/product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private productObject: string = "/assets/data/product.ts";

  items: Product[] = [];
  wishlistItems: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productObject);
  }

  // getProducts() {
  //   return this.http.get<{id: number, name: string, description: string, rate: number,
  //     imageUrl: string}[]>('/assets/data/product.ts');
  // }

  detail(product: Product): Observable<Product> {
    const url = `${this.productObject}/${product.id}`;
    return this.http.get<Product>(url);
  }

  // cart service start
  addToCart(product: Product) {
    this.items.push(product);

  }

  // addToCart(items: Product[]): Observable<Product> {
  //   localStorage.setItem(Product);
  // }

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
