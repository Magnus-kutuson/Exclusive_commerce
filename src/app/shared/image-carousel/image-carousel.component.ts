import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule],
  template: `
    <div
      #viewport
      class="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
    >
      <div class="flex min-w-full pr-2" [ngClass]="gapClass">
        @for (item of items; track $index) {
        <div data-card="true" [ngClass]="cardWrapperClasses">
          <ng-container
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item }"
          ></ng-container>
        </div>
        }
      </div>
    </div>
  `,
})
export class ImageCarouselComponent {
  @Input() items: any[] = [];
  @Input() gapClass: string = 'gap-6';
  @Input() cardWrapperClasses: string = '';
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;

  @ViewChild('viewport', { static: true })
  viewport?: ElementRef<HTMLDivElement>;

  prev(): void {
    this.scroll(-1);
  }

  next(): void {
    this.scroll(1);
  }

  private scroll(direction: number): void {
    const viewportElement = this.viewport?.nativeElement;
    if (!viewportElement) return;
    const firstCard =
      viewportElement.querySelector<HTMLElement>('[data-card="true"]');
    const gapPx = firstCard?.parentElement
      ? parseFloat(getComputedStyle(firstCard.parentElement).columnGap || '0')
      : 0;
    const cardWidthWithGap = firstCard
      ? firstCard.offsetWidth + gapPx
      : viewportElement.clientWidth;
    viewportElement.scrollBy({
      left: direction * cardWidthWithGap,
      behavior: 'smooth',
    });
  }
}
