import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../assets/data/product";
import {HttpService} from "../services/http.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private productObject: string = "/assets/data/product.ts";

  wishlistItems: Product[] = [];
  private productPath: string = "/assets/data/product.ts";
  product: Product[]=[];

  constructor(private http: HttpClient,
              private httpService: HttpService,
              ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productPath);
  }

  detail(product: Product): Observable<Product>{
    const url = `${this.productPath}/${product.id}`;
    return this.http.get<Product>(url);
  }

  getDetail(id: any):Observable<any>{
    return this.http.get(this.productPath + id)
  }

  // cart service start
  addToCart(product: Product) {
    this.product.push(product);
  }

  removeItem(index: number) {
    this.product.splice(index, 1);
  }

  getItems() {
    return this.product;
  }

  clearCart() {
    this.product = [];
    return this.product;
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
    this.wishlistItems.splice(index, 1);
  }

  // wishlist services end

  total = new BehaviorSubject<number>(0);

  setTotalItems(value: number) {
    this.total.next(value);
  }

}





// detail(productId: number, data: any): Observable<any> {
//   return this.http.get<Product['id']>(this.productUrl + productId, data);
// }



