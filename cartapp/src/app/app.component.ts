import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { UserComponent } from '../components/user/user.component';
import { CartComponent } from '../components/cart/cart.component';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductComponent,
    UserComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cartapp';
  cartList: Cart[] = [];

}
