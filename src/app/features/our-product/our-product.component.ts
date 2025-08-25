import { Component, ViewChild, inject } from '@angular/core';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Star,
  ShoppingCart,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '../../shared';
import { ProductService, Product } from '../../core/services/product.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-our-product',
  imports: [CommonModule, LucideAngularModule, ImageCarouselComponent],
  templateUrl: './our-product.component.html',
})
export class OurProductComponent {
  @ViewChild(ImageCarouselComponent) carousel?: ImageCarouselComponent;
  
  private productService = inject(ProductService);
  private wishlistService = inject(WishlistService);
  private cartService = inject(CartService);

  next() {
    this.carousel?.next();
  }
  prev() {
    this.carousel?.prev();
  }
  categoryIcon = {
    ChevronLeft,
    ChevronRight,
    Heart,
    Eye,
    Star,
    ShoppingCart,
  };

  products = this.productService.getAllProducts();

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
