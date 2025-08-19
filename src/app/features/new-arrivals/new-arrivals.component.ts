import { Component } from '@angular/core';
import { Headphones, LucideAngularModule, ShieldCheck, Truck } from 'lucide-angular';

@Component({
  selector: 'app-new-arrivals',
  imports: [LucideAngularModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
})
export class NewArrivalsComponent {
  icons = { Truck, Headphones, ShieldCheck };

  features = [
    {
      icon: this.icons.Truck,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: this.icons.Headphones,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: this.icons.ShieldCheck,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];
}
