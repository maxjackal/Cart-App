import { ProductService } from './../../services/product.service';
import { Cart, CartItem } from './../../models/cart';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(public cartService: CartService,public productService: ProductService) {
      this.cartService.getSelectedUser();
    }
}
