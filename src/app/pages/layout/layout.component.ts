import { Component } from '@angular/core';
import { FooterComponent } from "../../core/footer/footer.component";
import { HeaderComponent } from "../../core/header/header.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

}
