import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {HomeService} from "../../home.service";
import {PublicService} from "../../../public/public.service";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // product: Product[]=[];
  totalItemsInCart = 0;

  constructor(private homeService: HomeService,
              private publicService: PublicService,
              private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {

  }

  logout() {
    this.firebaseService.signout();
  }
}
