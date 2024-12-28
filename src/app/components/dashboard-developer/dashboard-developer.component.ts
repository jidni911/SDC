import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.scss']
})
export class DashboardDeveloperComponent implements OnInit{

  constructor(private productsService : ProductsService){}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((r:any)=>{
      this.products = r;
    })

  }

  currentTab = "products";
  orders : any[] =[];
  products: any[] = [];
  reviews: any[]=[];
  overallRating = 3.5
  productRatings: any[] = []
  selectedProduct: any = null;

  productEditForm : FormGroup = new FormGroup({
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

  getJson(prod:any){
    return JSON.stringify(prod);
  }

  saveProduct() {
    // Find and update the product in the products array
    console.log(this.productEditForm.value);

  }
}
