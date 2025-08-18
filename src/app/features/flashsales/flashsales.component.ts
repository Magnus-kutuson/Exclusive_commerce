import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-flashsales',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './flashsales.component.html',
})
export class FlashsalesComponent implements OnInit, OnDestroy {
  readonly icons = {
    ChevronLeft,
    ChevronRight,
  };

  daysRemaining: string = '00';
  hoursRemaining: string = '00';
  minutesRemaining: string = '00';
  secondsRemaining: string = '00';

  private countdownIntervalId: any;

  // Carousel
  @ViewChild('viewport', { static: true })
  viewport?: ElementRef<HTMLDivElement>;
  products: Array<{
    id: number;
    title: string;
    image: string;
    price: number;
    discount?: number;
  }> = [
    {
      id: 1,
      title: 'Game Controller',
      image:
        'https://images.unsplash.com/photo-1585079542156-2755d9c8aff0?q=80&w=800&auto=format&fit=crop',
      price: 120,
      discount: 40,
    },
    {
      id: 2,
      title: 'RGB Keyboard',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      price: 960,
      discount: 35,
    },
    {
      id: 3,
      title: 'Gaming Monitor',
      image:
        'https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=800&auto=format&fit=crop',
      price: 370,
      discount: 30,
    },
    {
      id: 4,
      title: 'Modern Chair',
      image:
        'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop',
      price: 375,
      discount: 25,
    },
    {
      id: 5,
      title: 'Headphones',
      image:
        'https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9?q=80&w=800&auto=format&fit=crop',
      price: 199,
      discount: 15,
    },
    {
      id: 6,
      title: 'Smart Watch',
      image:
        'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop',
      price: 250,
      discount: 20,
    },
    {
      id: 7,
      title: 'Bluetooth Speaker',
      image:
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop',
      price: 150,
      discount: 10,
    },
    {
      id: 8,
      title: 'DSLR Camera',
      image:
        'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=800&auto=format&fit=crop',
      price: 899,
      discount: 18,
    },
  ];

  ngOnInit(): void {
    this.updateCountdown();
    this.countdownIntervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
  }

  private updateCountdown(): void {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const msRemaining = endOfDay.getTime() - now.getTime();
    if (msRemaining <= 0) {
      this.daysRemaining = '00';
      this.hoursRemaining = '00';
      this.minutesRemaining = '00';
      this.secondsRemaining = '00';
      if (this.countdownIntervalId) {
        clearInterval(this.countdownIntervalId);
      }
      return;
    }

    const totalSeconds = Math.floor(msRemaining / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;

    this.daysRemaining = this.padTwoDigits(days);
    this.hoursRemaining = this.padTwoDigits(hours);
    this.minutesRemaining = this.padTwoDigits(minutes);
    this.secondsRemaining = this.padTwoDigits(seconds);
  }

  private padTwoDigits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  prev(): void {
    this.scrollCarousel(-1);
  }

  next(): void {
    this.scrollCarousel(1);
  }

  private scrollCarousel(direction: number): void {
    const viewportElement = this.viewport?.nativeElement;
    if (!viewportElement) return;
    const firstCard =
      viewportElement.querySelector<HTMLElement>('[data-card="true"]');
    const cardWidthWithGap = firstCard
      ? firstCard.offsetWidth + 24
      : viewportElement.clientWidth;
    viewportElement.scrollBy({
      left: direction * cardWidthWithGap,
      behavior: 'smooth',
    });
  }
}
