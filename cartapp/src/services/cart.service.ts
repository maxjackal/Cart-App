import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart, CartItem } from '../models/cart';
import { Product } from '../models/product';
import Swal from 'sweetalert2';
import { count } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedUser!: User;
  private cartList: Cart[] = [];

  constructor() {}

  getSelectedUser(): User | undefined {
    return this.selectedUser;
  }
  setSelectedUser(user: User) {
    this.selectedUser = user;
    if (this.getUserCart() == undefined) {
      this.cartList.push({
        userId: user.id,
        id: this.cartList.length + 1,
        items: [],
        productId: 0,
      });
    }

    Swal.fire({
      position: 'top-end',
      title: 'Selected User',
      text: user.fullName + ' is selected for shop',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  getUserCart(): Cart | undefined {
    return this.cartList.find((cart) => cart.userId == this.selectedUser.id);
  }
  addCartItem(productId: number) {
    let cart = this.cartList.find((cart) => cart.productId == productId);
    if (cart == undefined) {
    }
  }
  addProductInCart(product: Product) {
    let cart = this.getUserCart();
    if (cart == undefined) {
      Swal.fire({
        position: 'top-end',
        title: 'Uups',
        text: 'Please select user.',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    let cartItem = cart.items.find((item) => item.productId == product.id);
    if (cartItem == undefined) {
      cartItem = {
        cartId: cart.id,
        productId: product.id,
        count: 0,
        productName: product.name,
        productPrice: product.price,
        image: product.image,
      };
      cart.items.push(cartItem);
    }
    cartItem.count++;
    Swal.fire({
      position: 'top-end',
      title: 'Added product',
      text: product.name + ' added in cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  increment(id: number) {
    let cart = this.getUserCart();
    let product = cart?.items.find((item) => item.productId == id);
    if (product) {
      product.count++;
    }
  }
  decrement(id: number) {
    let cart = this.getUserCart();
    let product = cart?.items.find((item) => item.productId == id);
    if (product && product.count > 1) product.count--;
    else
      (cart!.items as unknown) = cart?.items.filter((p) => p.productId !== id);
  }
  removeQuantity(item: CartItem) {
    if (item.count > 1) {
      item.count -= 1;
    }
  }
  getTotalPrice(): number {
    return (
      this.getUserCart()?.items?.reduce(
        (total, item) => total + item.productPrice * item.count,
        0
      ) ?? 0
    );
  }
}
