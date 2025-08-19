import { Component } from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-our-product',
  imports: [LucideAngularModule],
  templateUrl: './our-product.component.html',
})
export class OurProductComponent {
  next() {
    throw new Error('Method not implemented.');
  }
  prev() {
    throw new Error('Method not implemented.');
  }
  categoryIcon = {
   
    ChevronLeft,
    ChevronRight,
   
  };
}
