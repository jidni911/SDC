import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersService } from 'src/app/service/orders.service';
import { ProductsService } from 'src/app/service/products.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-dashboard-seller',
  templateUrl: './dashboard-seller.component.html',
  styleUrls: ['./dashboard-seller.component.scss']
})
export class DashboardSellerComponent implements OnInit {
  


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

    currentTab = "orders";//dashboard
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

   
  }
