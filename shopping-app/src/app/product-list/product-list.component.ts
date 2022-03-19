import { Component, OnInit } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {

  }
  
  share(){
    alert('This is shared');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
