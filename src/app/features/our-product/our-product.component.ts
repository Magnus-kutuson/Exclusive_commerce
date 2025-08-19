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
        'https://images.unsplash.com/photo-1676193866128-03a926df76ef?w=600&auto=format&fit=crop',
      price: 100,
      rating: 4.3,
    },
    {
      id: 2,
      title: 'Canon DSLR',
      image:
        'https://media.istockphoto.com/id/2199413104/photo/vintage-reflex-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=bz2HUR5CTZjMco2ajrVCKLsYBZKUqzxCDLUzkas4ZfQ=',
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
    // new items
    {
      id: 9,
      title: 'Smartphone',
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop',
      price: 1200,
      rating: 4.8,
    },
    {
      id: 10,
      title: 'Headphones',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
      price: 240,
      rating: 4.5,
    },
    {
      id: 11,
      title: 'Smartwatch',
      image:
        'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1200&auto=format&fit=crop',
      price: 380,
      rating: 4.6,
    },
    {
      id: 12,
      title: 'Sneakers',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      price: 180,
      rating: 4.3,
    },
    {
      id: 13,
      title: 'Backpack',
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop',
      price: 320,
      rating: 4.7,
    },
    {
      id: 14,
      title: 'Coffee Maker',
      image:
        'https://plus.unsplash.com/premium_photo-1664192424507-89e53c421ade?w=600&auto=format&fit=crop',
      price: 460,
      rating: 4.4,
    },
    {
      id: 15,
      title: 'Gaming Chair',
      image:
        'https://images.unsplash.com/photo-1670946839270-cc4febd43b09?w=600&auto=format&fit=crop',
      price: 840,
      rating: 4.5,
    },
    {
      id: 16,
      title: 'Wrist Watch',
      image:
        'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop',
      price: 620,
      rating: 4.6,
    },
  ];

  getStarsArray(rating: number): boolean[] {
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }
}
