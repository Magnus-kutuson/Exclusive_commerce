import { Component } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { RouterLink, RouterLinkActive, } from '@angular/router';
import { LucideAngularModule, Search, Heart, ShoppingCart, User } from 'lucide-angular';

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
  isLoggedIn = false; 
  readonly icons = {
    Search,
    Heart,
    ShoppingCart,
    User
  };

  navLinks = [
    { label: 'Home', link: '/home' },
    { label: 'Contact', link: '/contact' },
    { label: 'About', link: '/about' },
    { label: 'Sign Up', link: '/signup' },
  ];

}
