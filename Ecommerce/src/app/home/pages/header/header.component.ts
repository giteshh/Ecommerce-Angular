import { Component, OnInit } from '@angular/core';
import {Product, products} from "../../../../assets/data/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product: Product | any;
  items = products;

  constructor() { }

  ngOnInit(): void {
  }

}
