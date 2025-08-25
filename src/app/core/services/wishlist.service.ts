import { Injectable, signal } from '@angular/core';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  inStock: boolean;
  discount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly wishlistItems = signal<WishlistItem[]>([]);

  constructor() {
    this.loadWishlistFromStorage();
  }

  getWishlistItems() {
    return this.wishlistItems.asReadonly();
  }

  addToWishlist(item: WishlistItem) {
    const currentItems = this.wishlistItems();
    const exists = currentItems.find(wishlistItem => wishlistItem.id === item.id);
    
    if (!exists) {
      this.wishlistItems.set([...currentItems, item]);
      this.saveWishlistToStorage();
    }
  }

  removeFromWishlist(itemId: string) {
    const currentItems = this.wishlistItems();
    const updatedItems = currentItems.filter(item => item.id !== itemId);
    this.wishlistItems.set(updatedItems);
    this.saveWishlistToStorage();
  }

  isInWishlist(itemId: string): boolean {
    return this.wishlistItems().some(item => item.id === itemId);
  }

  clearWishlist() {
    this.wishlistItems.set([]);
    this.saveWishlistToStorage();
  }

  getWishlistCount(): number {
    return this.wishlistItems().length;
  }

  private saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems()));
  }

  private loadWishlistFromStorage() {
    const stored = localStorage.getItem('wishlist');
    if (stored) {
      try {
        const items = JSON.parse(stored);
        this.wishlistItems.set(items);
      } catch (error) {
        console.error('Error loading wishlist from storage:', error);
      }
    }
  }
}
