import { Component, ViewChild } from '@angular/core';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Star,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '../../shared';

@Component({
  selector: 'app-our-product',
  imports: [CommonModule, LucideAngularModule, ImageCarouselComponent],
  templateUrl: './our-product.component.html',
})
export class OurProductComponent {
  @ViewChild(ImageCarouselComponent) carousel?: ImageCarouselComponent;

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
  };

  products = [
    {
      id: 1,
      title: 'Pet Food',
      image:
        'https://images.unsplash.com/photo-1604908554027-805b3a0f0ab9?q=80&w=1200&auto=format&fit=crop',
      price: 100,
      rating: 4.3,
    },
    {
      id: 2,
      title: 'Canon DSLR',
      image:
        'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop',
      price: 360,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Laptop',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
      price: 700,
      rating: 4.4,
    },
    {
      id: 4,
      title: 'Cosmetics',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      price: 500,
      rating: 4.1,
    },
    {
      id: 5,
      title: 'Kids Car',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
      price: 960,
      rating: 4.6,
    },
    {
      id: 6,
      title: 'Football Boots',
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
      price: 1160,
      rating: 4.7,
    },
    {
      id: 7,
      title: 'Game Controller',
      image:
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
      price: 660,
      rating: 4.4,
    },
    {
      id: 8,
      title: 'Jacket',
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
      price: 660,
      rating: 4.2,
    },
  ];

  getStarsArray(rating: number): boolean[] {
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }
}
