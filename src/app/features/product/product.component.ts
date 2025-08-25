import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart, Eye, Star, ShoppingCart } from 'lucide-angular';
import { ProductService, Product } from '../../core/services/product.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  readonly icons = { Heart, Eye, Star, ShoppingCart };
  
  private productService = inject(ProductService);
  private wishlistService = inject(WishlistService);
  private cartService = inject(CartService);

  products = this.productService.getBestSellingProducts();

  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating,
      inStock: product.inStock,
      discount: product.discount
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      inStock: product.inStock
    });
  }

  getStarsArray(rating: number): boolean[] {
    // Returns an array of 5 booleans indicating filled stars
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }

  getDiscountPercentage(product: Product): number {
    if (product.originalPrice && product.price < product.originalPrice) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return product.discount || 0;
  }
}
