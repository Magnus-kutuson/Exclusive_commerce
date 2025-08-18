import { Component, ElementRef, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-category',
  imports: [LucideAngularModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @ViewChild('categoryViewport', { static: true })
  viewport?: ElementRef<HTMLDivElement>;
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
    this.scroll(-1);
  }

  next(): void {
    this.scroll(1);
  }

  private scroll(direction: number): void {
    const viewportElement = this.viewport?.nativeElement;
    if (!viewportElement) return;
    const firstCard = viewportElement.querySelector<HTMLElement>(
      '[data-category-card="true"]'
    );
    const cardWidthWithGap = firstCard
      ? firstCard.offsetWidth + 16
      : viewportElement.clientWidth;
    viewportElement.scrollBy({
      left: direction * cardWidthWithGap,
      behavior: 'smooth',
    });
  }
}
