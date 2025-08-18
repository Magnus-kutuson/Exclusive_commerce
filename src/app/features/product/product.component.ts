import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart, Eye, Star } from 'lucide-angular';

@Component({
  selector: 'app-product',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  readonly icons = { Heart, Eye, Star };

  products: Array<{
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number; // 0-5
  }> = [
    {
      id: 1,
      title: 'Winter Jacket',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      price: 260,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Leather Handbag',
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      price: 960,
      rating: 4.6,
    },
    {
      id: 3,
      title: 'RGB AIO Cooler',
      image:
        'https://images.unsplash.com/photo-1595432541891-a461100d3054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnN8ZW58MHx8MHx8fDA%3D',
      price: 160,
      rating: 4.3,
    },
    {
      id: 4,
      title: 'Wooden Nightstand',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      price: 360,
      rating: 4.7,
    },
  ];

  getStarsArray(rating: number): boolean[] {
    // Returns an array of 5 booleans indicating filled stars
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }
}
