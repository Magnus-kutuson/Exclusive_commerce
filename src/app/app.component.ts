import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'exclusive_commerce';
}
