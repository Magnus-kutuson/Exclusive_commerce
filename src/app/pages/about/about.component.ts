import { Component, ViewChild } from '@angular/core';
import { Banknote, ChevronLeft, ChevronRight, CircleDollarSign, Headphones, Instagram, Linkedin, LucideAngularModule, Luggage, ShieldCheck, Store, Truck, Twitter } from 'lucide-angular';
import { ImageCarouselComponent } from '../../shared/image-carousel/image-carousel.component';


@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, ImageCarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild(ImageCarouselComponent) aboutCarousel?: ImageCarouselComponent;
  icons = {
    Truck,
    Headphones,
    ShieldCheck,
    Store,
    CircleDollarSign,
    Luggage,
    Banknote,
    Twitter,
    Instagram,
    Linkedin,
    ChevronLeft,
    ChevronRight
  };

  management = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q0VPfGVufDB8fDB8fHww',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Jane Smith',
      position: 'Chief Marketing Officer',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q0VPfGVufDB8fDB8fHww',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mike Johnson',
      position: 'Chief Technology Officer',
      image:
        'https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0VPfGVufDB8fDB8fHww',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Tom Cruise',
      position: 'Product Designer',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q0VPfGVufDB8fDB8fHww',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Emma Watson',
      position: 'Managing Director',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Will Smith',
      position: 'Chief Financial Officer',
      image:
        'https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0VPfGVufDB8fDB8fHww',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Bismark Yamoah',
      position: 'Chief Operating Officer',
      image:
        'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Rose Tetteh',
      position: 'Business Development Associate',
      image:
        'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Kendrick Oppong',
      position: 'Financial Analyst',
      image:
        'https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
  ];

  details = [
    {
      icon: this.icons.Store,
      rate: '10.5k',
      description: 'Sallers active our site',
    },
    {
      icon: this.icons.CircleDollarSign,
      rate: '33k',
      description: 'Monthly Product Sale',
    },
    {
      icon: this.icons.Luggage,
      rate: '45.5k',
      description: 'Customer active in our site',
    },
    {
      icon: this.icons.Banknote,
      rate: '25k',
      description: 'Annual gross sale in our site',
    },
  ];

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

  prev(): void {
    this.aboutCarousel?.prev();
  }

  next(): void {
    this.aboutCarousel?.next();
  }
}
