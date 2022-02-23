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
  product: Product = {
    id: 0,
    image: "",
    description: '',
    rate: 0,
    quantity: 0
  };

  constructor(private http: HttpClient,
              private httpService: HttpService) {
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productObject);
  // }

  getProducts(): Observable<any> {
    return this.httpService.get('/productlist/productlist/');
  }

  // detail(product: Product): Observable<Product> {
  //   const url = `${this.productObject}/${product.id}`;
  //   return this.http.get<Product>(url);
  // }

  detail(id: number): Observable<Product> {
    const url = this.httpService.getDetailUrl('/productlist/productlist/', id);
    return this.httpService.get(url);
  }

  // getCartItemList(): Observable<any> {
  //   return this.httpService.get('/cart/cart/');
  // }

  // cart service start
  addToCart(product: Product) {
    this.items.push(product);

  }

  // with backend api
  // addToCart(product: Product): Observable<Product> {
  //   return this.httpService.post('/cart/cart/', product);
  // }

  detailCart(id: number): Observable<Product> {
    const url = this.httpService.getDetailUrl('/cart/cart/', id);
    return this.httpService.get(url);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
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

  removeWishlistItem(index: number){
    this.items.splice(index, 1);
  }

  // wishlist services end

}
