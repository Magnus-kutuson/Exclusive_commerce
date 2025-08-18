import { Component } from '@angular/core';
import { LucideAngularModule, SendHorizontal, Facebook, Twitter, Instagram, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
templateUrl: './footer.component.html',
})
export class FooterComponent {
readonly footerIcons = {
    SendHorizontal,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
  };
}
