import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  productList: any = [
    {'id':1, 'name': 'OnePlus 9 Pro 5G ', 'description':'Morning Mist, 12GB RAM, 256GB Storage', 'rate': 69999, 'imageUrl': '/assets/pics/m1.jpg'},
    {'id':2, 'name': 'Apple iPhone 12', 'description':'Purple, 128GB', 'rate': 70900, 'imageUrl': '/assets/pics/ipo.jpg'},
    {'id':3, 'name': 'Google Pixel 4a ', 'description':'Just Black, 6GB RAM, 128GB Storage', 'rate': 26990, 'imageUrl': '/assets/pics/go.jpg'},
    {'id':4, 'name': 'Samsung Galaxy M12', 'description':'Blue,4GB RAM, 64GB Storage', 'rate': 10499, 'imageUrl': '/assets/pics/sam.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
