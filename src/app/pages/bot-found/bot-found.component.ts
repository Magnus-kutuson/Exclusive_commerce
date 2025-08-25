import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Breadcrumb } from "primeng/breadcrumb";

@Component({
  selector: 'app-bot-found',
  imports: [Breadcrumb, RouterLinkActive, RouterLink],
  templateUrl: './bot-found.component.html',
})
export class BotFoundComponent {

  home = { label: 'Home', routerLink: '/home' };

  items = [{ label: '404 Error', routerLink: '**' }];
}
