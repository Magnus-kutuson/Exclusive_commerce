import { Injectable, inject } from '@angular/core';
import { WishlistService, WishlistItem } from './wishlist.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  private readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);

  getSampleProducts(): WishlistItem[] {
    return [
      {
        id: '1',
        name: 'Wireless Bluetooth Headphones',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        rating: 4.5,
        inStock: true,
        discount: 20
      },
      {
        id: '2',
        name: 'Smart Fitness Watch',
        price: 199.99,
        originalPrice: 249.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        rating: 4.8,
        inStock: true,
        discount: 20
      },
      {
        id: '3',
        name: 'Premium Coffee Maker',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
        rating: 4.2,
        inStock: false
      },
      {
        id: '4',
        name: 'Ergonomic Office Chair',
        price: 299.99,
        originalPrice: 399.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        rating: 4.6,
        inStock: true,
        discount: 25
      },
      {
        id: '5',
        name: 'Portable Laptop Stand',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
        rating: 4.3,
        inStock: true
      }
    ];
  }

  addSampleDataToWishlist() {
    const sampleProducts = this.getSampleProducts();
    sampleProducts.forEach(product => {
      this.wishlistService.addToWishlist(product);
    });
  }

  clearSampleData() {
    this.wishlistService.clearWishlist();
  }

  addSampleDataToCart() {
    // Add some sample items to cart for testing
    this.cartService.addToCart({
      id: 'cart1',
      name: 'LCD Monitor',
      price: 650,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
      inStock: true
    });

    this.cartService.addToCart({
      id: 'cart2',
      name: 'H1 Gamepad',
      price: 550,
      image: 'https://images.unsplash.com/photo-1605300781394-60d4db501b2f?w=400&h=300&fit=crop',
      inStock: true
    });

    // Add one more of the gamepad to test quantity
    this.cartService.addToCart({
      id: 'cart2',
      name: 'H1 Gamepad',
      price: 550,
      image: 'https://images.unsplash.com/photo-1605300781394-60d4db501b2f?w=400&h=300&fit=crop',
      inStock: true
    });
  }
}
