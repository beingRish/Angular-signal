import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./components/search/search.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SearchComponent,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    ProductListComponent,
    ShoppingCartComponent,
],
})
export class AppComponent {
  title = 'Angular-signal';

  constructor(public productService: ProductService) {}
}
