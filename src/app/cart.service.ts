import { HttpClient } from "@angular/common/http";
import { Product } from "./products";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getShippingPrice() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      "../assets/shipping.json"
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
