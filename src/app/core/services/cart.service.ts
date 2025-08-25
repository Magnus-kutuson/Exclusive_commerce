import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  getCartItems() {
    return this.cartItems.asReadonly();
  }

  getCartCount = computed(() => {
    return this.cartItems().reduce((count, item) => count + item.quantity, 0);
  });

  getCartSubtotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  getCartTotal = computed(() => {
    const subtotal = this.getCartSubtotal();
    const shipping = subtotal > 0 ? 0 : 0; // Free shipping for now
    return subtotal + shipping;
  });

  addToCart(item: Omit<CartItem, 'quantity'>) {
    const currentItems = this.cartItems();
    const existingItemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // Item already exists, increase quantity
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1
      };
      this.cartItems.set(updatedItems);
    } else {
      // New item, add to cart
      this.cartItems.set([...currentItems, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(itemId: string) {
    const currentItems = this.cartItems();
    this.cartItems.set(currentItems.filter(item => item.id !== itemId));
  }

  updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }

    const currentItems = this.cartItems();
    const updatedItems = currentItems.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartItems.set(updatedItems);
  }

  clearCart() {
    this.cartItems.set([]);
  }

  isEmpty = computed(() => this.cartItems().length === 0);
}
