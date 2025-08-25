import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService, WishlistItem } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  private wishlistService = inject(WishlistService);
  
  wishlistItems = this.wishlistService.getWishlistItems();
  isEmpty = computed(() => this.wishlistItems().length === 0);

  removeFromWishlist(itemId: string) {
    this.wishlistService.removeFromWishlist(itemId);
  }

  clearWishlist() {
    this.wishlistService.clearWishlist();
  }

  addToCart(item: WishlistItem) {
    // TODO: Implement cart service integration
    console.log('Adding to cart:', item);
    // Optionally remove from wishlist after adding to cart
    // this.removeFromWishlist(item.id);
  }

  getDiscountPercentage(item: WishlistItem): number {
    if (item.originalPrice && item.price < item.originalPrice) {
      return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    }
    return 0;
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < Math.floor(rating));
  }
}
