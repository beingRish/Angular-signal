import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Stylish Watch', price: 99.99, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9SoWcEXq4lv9pNdRDw3NM4ngzxJKUecOjE3p_hkGxftKkymrKBQyPXfIbxxuptkxpFUYRgbgUg0fLJSgWAQ4y8fEPvJtYBv3s1SXGjMU7CP4KkMloz_Bn&usqp=CAE' },
    { id: 2, name: 'Wireless Earbuds', price: 129.99, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9O3wqaA4RZ9V_GhlvNS_DH6_GxM-3z9DkIQS8IVj5PkelszHVfT3N5MWsgY6OrtoTgt4n3VRxFkPTTAC4U8bk7ppD7NRCCeOmdoD6ryFYaVAdrCgMnHrdMQ&usqp=CAE' },
    { id: 3, name: 'Smart Speaker', price: 79.99, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlUX-Xuciv-wxmMH1nI8syiuL4VK1rYcv0hUtzSpIM31nCMjT3TK1So9r_WWvTE7VWDqAu0PK7OQCJczFlFxWhCDMMiMtMHR41YwpedlF18JFN-iw8eo12zg&usqp=CAE' },
    { id: 4, name: 'Fitness Tracker', price: 49.99, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQ-mFLb2G504V-wNXFnGoU63QhmEyv9r3b270XKn2fTxBfc7TLMZvpUbHrvn2cph_kIPHoeA_LW9tIUD6cnswHcbNTKotu5lQUeRNV5euMYqnhyYiVqCsuqA&usqp=CAE' },
  ]

  constructor(public productService: ProductService) { }

  addToCart(product: product) {

  }
}
