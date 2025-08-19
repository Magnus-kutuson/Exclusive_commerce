import { Component, ViewChild } from '@angular/core';
import {
  LucideAngularModule,
  Smartphone,
  Computer,
  Watch,
  Camera,
  Headphones,
  Gamepad,
  ChevronLeft,
  ChevronRight,
  Tablet,
  Video,
} from 'lucide-angular';
import { ImageCarouselComponent } from '../../shared';

@Component({
  selector: 'app-category',
  imports: [LucideAngularModule, ImageCarouselComponent],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @ViewChild(ImageCarouselComponent) carousel?: ImageCarouselComponent;
  categoryIcon = {
    Smartphone,
    Computer,
    Watch,
    Camera,
    Headphones,
    Gamepad,
    ChevronLeft,
    ChevronRight,
    Tablet,
    Video,
  };

  categories = [
    { label: 'Smartphone', icon: this.categoryIcon.Smartphone },
    { label: 'Computer', icon: this.categoryIcon.Computer },
    { label: 'Watch', icon: this.categoryIcon.Watch },
    { label: 'Camera', icon: this.categoryIcon.Camera },
    { label: 'Headphones', icon: this.categoryIcon.Headphones },
    { label: 'Gamepad', icon: this.categoryIcon.Gamepad },
    { label: 'Tablet', icon: this.categoryIcon.Tablet },
    { label: 'Action Camera', icon: this.categoryIcon.Video },
    { label: 'Earbuds', icon: this.categoryIcon.Headphones },
    { label: 'Console', icon: this.categoryIcon.Gamepad },
    { label: 'Accessories', icon: this.categoryIcon.Smartphone },
  ];

  prev(): void {
    this.carousel?.prev();
  }

  next(): void {
    this.carousel?.next();
  }

  // Scrolling is handled inside the reusable ImageCarouselComponent
}
