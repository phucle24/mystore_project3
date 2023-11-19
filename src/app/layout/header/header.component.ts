import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'My Store - Udacity Project 3';
  cartProductList!: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
    this.calculateProduct(this.cartProductList);
  }

  calculateProduct(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum = sum+=Number(item.amount);
    });
    const ele = document.getElementById('carId') as HTMLElement;
    ele.innerHTML = sum.toString();
  }
}
