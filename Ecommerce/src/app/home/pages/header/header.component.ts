import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {HomeService} from "../../home.service";
import {PublicService} from "../../../public/public.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product: Product[]=[];
  // items = products;
  totalItemsInCart = 0;

  constructor(private homeService: HomeService,
              private publicService: PublicService,
              private sessionService: SessionService) {

  }

  ngOnInit(): void {
    this.homeService.getProducts().subscribe(response => {
      console.log(response);
      this.totalItemsInCart = response.length;
    })
  }

  logout(){
    this.publicService.logout();
  }

  isSessionExist(){
    this.sessionService.isSessionExist();
  }

}
