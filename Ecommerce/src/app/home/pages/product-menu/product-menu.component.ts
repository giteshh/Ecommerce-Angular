import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  public items: any = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getProducts().subscribe(data => this.items = data);
  }

}
