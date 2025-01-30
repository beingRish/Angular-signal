import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = signal<Product[]>([
    { id: 1, name: 'Stylish Watch', price: 99.99, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9SoWcEXq4lv9pNdRDw3NM4ngzxJKUecOjE3p_hkGxftKkymrKBQyPXfIbxxuptkxpFUYRgbgUg0fLJSgWAQ4y8fEPvJtYBv3s1SXGjMU7CP4KkMloz_Bn&usqp=CAE' },
    { id: 2, name: 'Wireless Earbuds', price: 129.99, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9O3wqaA4RZ9V_GhlvNS_DH6_GxM-3z9DkIQS8IVj5PkelszHVfT3N5MWsgY6OrtoTgt4n3VRxFkPTTAC4U8bk7ppD7NRCCeOmdoD6ryFYaVAdrCgMnHrdMQ&usqp=CAE' },
    { id: 3, name: 'Smart Speaker', price: 79.99, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlUX-Xuciv-wxmMH1nI8syiuL4VK1rYcv0hUtzSpIM31nCMjT3TK1So9r_WWvTE7VWDqAu0PK7OQCJczFlFxWhCDMMiMtMHR41YwpedlF18JFN-iw8eo12zg&usqp=CAE' },
    { id: 4, name: 'Fitness Tracker', price: 49.99, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQ-mFLb2G504V-wNXFnGoU63QhmEyv9r3b270XKn2fTxBfc7TLMZvpUbHrvn2cph_kIPHoeA_LW9tIUD6cnswHcbNTKotu5lQUeRNV5euMYqnhyYiVqCsuqA&usqp=CAE' },
  ])

  private cart = signal<CartItem[]>([]);

  getProducts = computed(() => this.products());
  getCart = computed(() => this.cart());


  addToCart(product: Product) {
    // set, update
    this.cart.update(prevCart => {
      const exitingItem = prevCart.find(item => item.product.id === product.id)
      if(exitingItem) {
        return prevCart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  }

}
