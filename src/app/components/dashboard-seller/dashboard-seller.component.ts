import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersService } from 'src/app/service/orders.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard-seller',
  templateUrl: './dashboard-seller.component.html',
  styleUrls: ['./dashboard-seller.component.scss']
})
export class DashboardSellerComponent implements OnInit {
  unix2Normal(unixTimestamp: number): string {
    const date = new Date(unixTimestamp); // Convert UNIX timestamp to a Date object

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((r: any) => {
      this.products = r;
    })
    this.ordersService.getOrders().subscribe((r: any) => {
      this.orders = r;
    })

  }

  currentTab = "dashboard";
  orders: any[] = [];
  products: any[] = [];
  reviews: any[] = [];
  overallRating = 3.5
  productRatings: any[] = []
  selectedProduct: any = null;

  productEditForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    discountPrice: new FormControl(''),
    currency: new FormControl(''),
    stockStatus: new FormControl(''),
    quantityAvailable: new FormControl(''),
    mainImage: new FormControl(''),
    galleryImages: new FormControl([]),
    dimensions: new FormGroup({
      height: new FormControl(''),
      width: new FormControl(''),
      depth: new FormControl('')
    }),
    weight: new FormControl(''),
    sellerId: new FormControl('')
  })

  editProduct(product: any) {
    this.selectedProduct = product;
    this.productEditForm.patchValue(product);

  }

  getJson(prod: any) {
    return JSON.stringify(prod);
  }

  saveProduct() {
    // Find and update the product in the products array
    console.log(this.productEditForm.value);

  }
}
