import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { FlashsalesComponent } from './features/flashsales/flashsales.component';
import { CategoryComponent } from "./features/category/category.component";
import { ProductComponent } from './features/product/product.component';
import { BannerComponent } from "./features/banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroSectionComponent, FlashsalesComponent, CategoryComponent, ProductComponent, BannerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'exclusive_commerce';
}
