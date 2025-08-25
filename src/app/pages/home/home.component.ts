import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../features/hero-section/hero-section.component";
import { FlashsalesComponent } from "../../features/flashsales/flashsales.component";
import { CategoryComponent } from "../../features/category/category.component";
import { ProductComponent } from "../../features/product/product.component";
import { BannerComponent } from "../../features/banner/banner.component";
import { OurProductComponent } from "../../features/our-product/our-product.component";
import { NewArrivalsComponent } from "../../features/new-arrivals/new-arrivals.component";
import { SampleDataService } from "../../core/services/sample-data.service";


@Component({
  selector: 'app-home',
  imports:[ HeroSectionComponent, FlashsalesComponent, CategoryComponent, ProductComponent, BannerComponent, OurProductComponent, NewArrivalsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly sampleDataService = inject(SampleDataService);

  ngOnInit() {
    // Initialize with some sample cart data for testing
    this.sampleDataService.addSampleDataToCart();
  }
}
