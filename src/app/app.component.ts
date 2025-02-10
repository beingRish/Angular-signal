import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./components/search/search.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ProductService } from './services/product.service';
import { fetchData, UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';


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
    HttpClientModule,
    AsyncPipe
  ]
})
export class AppComponent {
  title = 'Angular-signal';
  users = [];

  private userService = inject(UserService)

  user$ = fetchData();

  constructor(
    public productService: ProductService
  ) {
    fetchData(); // call the fetchData function when the component is initialized
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe((users: any) => {
      this.users = users
    })
  }
}
