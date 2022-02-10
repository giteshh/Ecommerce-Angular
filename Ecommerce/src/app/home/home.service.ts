import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private productUrl: string = "/assets/data/products.json/";
  items: Product[]=[];

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  detail(product: Product): Observable<Product>{
    const url = `${this.productUrl}/${product.id}`;
    return this.http.get<Product>(url);
  }

   // cart service start
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

// cart service end
}
