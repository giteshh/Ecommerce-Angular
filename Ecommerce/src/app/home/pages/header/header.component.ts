import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {HomeService} from "../../home.service";
import {PublicService} from "../../../public/public.service";
import {SessionService} from "../../../services/session.service";
import {UserInterface} from "../../../public/public.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // product: Product[]=[];
  totalItemsInCart = 0;
  user: UserInterface[] = [];
  isUserLogin = false;

  constructor(private homeService: HomeService,
              private publicService: PublicService) {

  }

  ngOnInit(): void {

  }

  logout() {
    this.publicService.logout();
  }
}
