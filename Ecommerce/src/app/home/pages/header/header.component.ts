import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../assets/data/product";
import {HomeService} from "../../home.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product: Product[]=[];
  // items = products;
  totalItemsInCart = 0;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.homeService.getProducts().subscribe(response => {
      console.log(response);
      this.totalItemsInCart = response.length;
    })
  }

}
