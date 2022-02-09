import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private productUrl: string = "/assets/data/products.json/";
  product: Product[]=[];

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  // detail(productId: number, data: any): Observable<any> {
  //   return this.http.get<Product['id']>(this.productUrl + productId, data);
  // }

  detail(product: Product): Observable<Product>{
    const url = `${this.productUrl}/${product.id}`;
    return this.http.get<Product>(url);
  }

   getDetail(id: any):Observable<any>{
    return this.http.get(this.productUrl + id)
  }

}
