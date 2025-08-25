import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.component.html',
 
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  cartItems = this.cartService.getCartItems();
  cartSubtotal = this.cartService.getCartSubtotal; 
  cartTotal = this.cartService.getCartTotal; 
  isEmpty = this.cartService.isEmpty; 

  couponCode = signal('');
  couponApplied = signal(false);
  couponDiscount = signal(0);

  removeFromCart(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  updateQuantity(itemId: string, quantity: number) {
    this.cartService.updateQuantity(itemId, quantity);
  }

  onQuantityChange(event: Event, itemId: string) {
    const target = event.target as HTMLInputElement;
    const quantity = parseInt(target.value, 10);
    if (!isNaN(quantity)) {
      this.updateQuantity(itemId, quantity);
    }
  }

  increaseQuantity(itemId: string, currentQuantity: number) {
    this.updateQuantity(itemId, currentQuantity + 1);
  }

  decreaseQuantity(itemId: string, currentQuantity: number) {
    if (currentQuantity > 1) {
      this.updateQuantity(itemId, currentQuantity - 1);
    }
  }

  applyCoupon() {
    const code = this.couponCode().trim().toLowerCase();
    if (code === 'save10') {
      this.couponDiscount.set(10);
      this.couponApplied.set(true);
    } else if (code === 'welcome20') {
      this.couponDiscount.set(20);
      this.couponApplied.set(true);
    } else {
      this.couponDiscount.set(0);
      this.couponApplied.set(false);
      alert('Invalid coupon code');
    }
  }

  updateCart() {
    console.log('Cart updated');
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }

  getItemSubtotal(item: CartItem): number {
    return item.price * item.quantity;
  }

  getFinalTotal(): number {
    const subtotal = this.cartSubtotal(); // () because it's a computed signal
    const discount = (subtotal * this.couponDiscount()) / 100;
    return +(subtotal - discount).toFixed(2);
  }
}
