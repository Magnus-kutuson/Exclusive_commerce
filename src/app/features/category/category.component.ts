import { Component } from '@angular/core';
import { LucideAngularModule, Smartphone, Computer, Watch, Camera, Headphones, Gamepad, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-category',
  imports: [LucideAngularModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  icons: any;
  next() {
    throw new Error('Method not implemented.');
  }
  prev() {
    throw new Error('Method not implemented.');
  }
  categoryIcon = {
    Smartphone,
    Computer,
    Watch,
    Camera,
    Headphones,
    Gamepad,
    ChevronLeft,
    ChevronRight
  };

  categories = [
    { label: 'Smartphone', icon: this.categoryIcon.Smartphone },
    { label: 'Computer', icon: this.categoryIcon.Computer },
    { label: 'Watch', icon: this.categoryIcon.Watch },
    { label: 'Camera', icon: this.categoryIcon.Camera },
    { label: 'Headphones', icon: this.categoryIcon.Headphones },
    { label: 'Gamepad', icon: this.categoryIcon.Gamepad },
  ];
}
