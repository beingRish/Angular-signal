import { ChangeDetectorRef, Component, computed, effect, inject, signal } from '@angular/core';
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

    this.quantity.set(100)
    this.quantity.set(200)
    this.quantity.set(1000)

    effect(() => console.log('Total quantity:', this.quantity()));
  }

  ngOnInit(): void {
    this.getUser();
    this.updateDate();
  }

  // with zone

  // Example 1
  // Property set in an event handler
  count = 1;
  price = 100;
  quantity = signal(10);
  colors = signal<string[]>(["Red", "Green", "Yellow", "Blue"])
  computedPrice = computed(() => this.quantity() * this.count)
  // cdr = inject(ChangeDetectorRef)
  get productPrice(): number {
    return this.price = this.price * this.count;
  }

  onIncrement() {
    this.count++;
    this.quantity.update(value => value + 1)
  }

  // Example 2
  // Property updated in a setInterval event handler
  date = new Date();
  updateDate() {
    setInterval(() => {
      this.date = new Date();
      // this.cdr.markForCheck();
    })
  }

  // Example 3
  // Fetching Data with API call 
  getUser() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users
    })
  }
}
