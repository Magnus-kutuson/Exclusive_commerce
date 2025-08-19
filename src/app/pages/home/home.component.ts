import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { HeroSectionComponent } from "../../features/hero-section/hero-section.component";
import { FlashsalesComponent } from "../../features/flashsales/flashsales.component";
import { CategoryComponent } from "../../features/category/category.component";
import { ProductComponent } from "../../features/product/product.component";
import { BannerComponent } from "../../features/banner/banner.component";
import { OurProductComponent } from "../../features/our-product/our-product.component";
import { NewArrivalsComponent } from "../../features/new-arrivals/new-arrivals.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroSectionComponent, FlashsalesComponent, CategoryComponent, ProductComponent, BannerComponent, OurProductComponent, NewArrivalsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
