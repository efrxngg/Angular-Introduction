import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  product: Product | undefined;
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFronRoute = Number(routerParams.get('productId'));
    this.product = products.find((x) => x.id === productIdFronRoute);
  }
}
