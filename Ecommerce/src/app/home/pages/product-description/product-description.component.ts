import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  productDesc: any = [
    {'id':1, 'name': 'mobile1', 'description':'black, 8gb RAM, 256gb Storage', 'rate': 12500},
    {'id':2, 'name': 'mobile2', 'description':'black, 6gb RAM, 128gb Storage', 'rate': 13800},
    {'id':3, 'name': 'mobile3', 'description':'black, 8gb RAM, 256gb Storage', 'rate': 14500},
    {'id':4, 'name': 'mobile4', 'description':'black, 6gb RAM, 128gb Storage', 'rate': 15500},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
