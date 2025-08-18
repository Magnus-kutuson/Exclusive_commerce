import { Component, OnDestroy, OnInit } from '@angular/core';
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

  hoursRemaining: string = '00';
  minutesRemaining: string = '00';
  secondsRemaining: string = '00';

  private countdownIntervalId: any;

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
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    this.hoursRemaining = this.padTwoDigits(hours);
    this.minutesRemaining = this.padTwoDigits(minutes);
    this.secondsRemaining = this.padTwoDigits(seconds);
  }

  private padTwoDigits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  prev(): void {
    // Placeholder for carousel previous action
  }

  next(): void {
    // Placeholder for carousel next action
  }
}
