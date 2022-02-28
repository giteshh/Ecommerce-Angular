import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {HomeService} from "../../home.service";
import {PublicService} from "../../../public/public.service";
import {FirebaseService} from "../../../services/firebase.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  product: Product[] = [];
  totalItemsInCart = 0;
  cart: Product | any;

  constructor(private homeService: HomeService,
              private publicService: PublicService,
              private firebaseService: FirebaseService,
              private sessionService: SessionService) {
    this.getLength();
  }

  logout() {
    this.firebaseService.signout();
  }

  getLength() {
    // this.sessionService.getCart();
    // this.totalItemsInCart = this.cart.length;
  }
}
