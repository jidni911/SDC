import { UsersService } from 'src/app/service/users.service';
import { OrdersService } from 'src/app/service/orders.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.scss']
})
export class DashboardDeveloperComponent implements OnInit {
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
    private ordersService: OrdersService,
    private userService: UsersService
  ) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((r: any) => {
      this.users = r;
    })
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
  users: any[] = [];
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

  getUserFromId(id: any) {

    return this.users.find((v) => { return v.id == id })
  }
  getProductFromId(id: any) {

    return this.products.find((v) => { return v.id == id })
  }
}
