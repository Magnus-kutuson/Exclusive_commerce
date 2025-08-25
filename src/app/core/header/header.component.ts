import { Component, inject } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LucideAngularModule, Search, Heart, ShoppingCart, User } from 'lucide-angular';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-header',
  imports: [
    SubHeaderComponent,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);

  isLoggedIn = true; 
  readonly icons = {
    Search,
    Heart,
    ShoppingCart,
    User
  };

  cartCount = this.cartService.getCartCount;
  wishlistItems = this.wishlistService.getWishlistItems();

  navLinks = [
    { label: 'Home', link: '/home' },
    { label: 'Contact', link: '/contact' },
    { label: 'About', link: '/about' },
    { label: 'Sign Up', link: '/signup' },
  ];

  navigateToWishlist() {
    this.router.navigate(['/wishlist']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
