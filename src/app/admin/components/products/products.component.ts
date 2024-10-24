import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/home/types/products.type';
import { ProductsService } from 'src/app/home/services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(products => {
      this.productList = products;
    });
  }
}
