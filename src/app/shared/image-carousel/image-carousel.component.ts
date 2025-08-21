import {
  Component,
  Input,
  TemplateRef,
  ContentChild,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ImageCarouselComponent implements OnInit {
  /** Decide mode */
  @Input() mode: 'scroll' | 'slideshow' = 'scroll';

  /** Shared Inputs */
  @Input() items: any[] = []; // can be images or custom templates
  @ContentChild(TemplateRef) itemTemplate?: TemplateRef<any>;

  /** Slideshow Inputs */
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;
  selectedIndex = 0;

  /** Scroll Inputs */
  @Input() gapClass: string = 'gap-6';
  @Input() cardWrapperClasses: string = '';
  @ViewChild('viewport') viewport?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    if (this.mode === 'slideshow' && this.autoSlide) {
      this.startAutoSlide();
    }
  }

  /** ---- Slideshow logic ---- */
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  private startAutoSlide(): void {
    setInterval(() => {
      this.selectedIndex =
        this.selectedIndex < this.items.length - 1 ? this.selectedIndex + 1 : 0;
    }, this.slideInterval);
  }

  /** ---- Scroll logic ---- */
  prev(): void {
    this.scroll(-1);
  }

  next(): void {
    this.scroll(1);
  }

  private scroll(direction: number): void {
    const viewportElement = this.viewport?.nativeElement;
    if (!viewportElement) return;
    const firstCard = viewportElement.querySelector<HTMLElement>('[data-card="true"]');
    const gapPx = firstCard?.parentElement
      ? parseFloat(getComputedStyle(firstCard.parentElement).columnGap || '0')
      : 0;
    const cardWidthWithGap = firstCard
      ? firstCard.offsetWidth + gapPx
      : viewportElement.clientWidth;
    viewportElement.scrollBy({
      left: direction * cardWidthWithGap,
      behavior: 'smooth'
    });
  }
}
