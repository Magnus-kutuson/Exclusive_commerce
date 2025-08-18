import { Component } from '@angular/core';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  imports: [LucideAngularModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  readonly chevronRight = ChevronRight;

  categories = [
    { label: "Women's Fashion", hasIcon: true },
    { label: "Men's Fashion", hasIcon: true },
    { label: 'Electronics', hasIcon: false },
    { label: 'Home & lifestyle', hasIcon: false },
    { label: 'Medicine', hasIcon: false },
    { label: 'Sport & Outdoor', hasIcon: false },
    { label: "Baby's & Toys", hasIcon: false },
    { label: 'Groceries & Pet', hasIcon: false },
    { label: 'Health & Beauty', hasIcon: false },
  ];
}
