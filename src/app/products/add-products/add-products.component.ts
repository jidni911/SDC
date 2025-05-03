import { ProductsService } from './../../service/products.service';
import { FilesService } from './../../service/files.service';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  name = '';
  description = '';
  category = '';
  brand = '';
  price = 0;
  discountPrice = 0;
  stockStatus = '';
  quantity = 0;
  mainImage = '';
  mainImageUrl = 'https://placehold.co/300x300?text=Main+Image';
  galleryImages: any[] = [];
  dimensions = '';
  weight = 0;
  tags = '';
  origin = '';
  features = '';
apiUrl = environment.apiUrl;

  fillDemoData() {
    this.name = "Demo Product";
    this.description = "Demo Product Description";
    this.category = "Electronics";
    this.brand = "Demo Brand";
    this.price = 1000;
    this.discountPrice = 900;
    this.stockStatus = "In Stock";
    this.quantity = 1000;
    this.mainImage = "";
    this.mainImageUrl = "https://placehold.co/300x300?text=Main+Image";
    this.galleryImages = [];
    this.dimensions = "90x90x90";
    this.weight = 10;
    this.tags = 'demo, product';
    this.origin = "Jinjira";
    this.features = 'demo f, product d';
  }

  categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Toys & Games',
    'Baby Products',
    'Pet Products',
    'Arts, Crafts & Sewing',
    'Automotive',
    'Industrial & Scientific',
  ];

  stockStatuses = [
    'In Stock',
    'Out of Stock',
    'Preorder',
    'Backorder',
  ];

  logo = "/assets/logo/logo1.png";

  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private router: Router,
    private filesService: FilesService
  ) { }
  ngOnInit(): void {
    if (!AppComponent.getUser()) {
      this.router.navigateByUrl('/signin');
    }
    let user = AppComponent.getUser();
    this.logo = environment.apiUrl + user.profilePicture.url;//TODO sometimes, data is late

  }

  handleMainImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.filesService.uploadImage(file).subscribe((res: any) => {
        const newUrl = environment.apiUrl + res.url;
        this.mainImageUrl = newUrl; 
        this.mainImage = res.id;
        input.value = '';
      });
    }
  }

  handleGalleryImages(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.filesService.uploadImage(files[i]).subscribe((res: any) => {
          this.galleryImages.push(res);
        });
      }
      input.value = '';
    }

    // this.addProductForm.get('galleryImages')!.setValue(files);
  }

  onSubmit() {
    const productData = {
      name: this.name,
      description: this.description,
      category: this.category,
      brand: this.brand,
      price: this.price,
      discountPrice: this.discountPrice,
      stockStatus: this.stockStatus,
      quantity: this.quantity,
      mainImageId: this.mainImage, // Ensure this is an ID, not a file
      galleryImagesId: this.galleryImages.map((img: any) => img.id), // Convert gallery images to IDs
      dimensions: this.dimensions,
      weight: this.weight.toString(), // Ensure weight is sent as a string if needed
      tags: this.tags.split(',').map(tag => tag.trim()), // Convert tags from string to array
      origin: this.origin,
      features: this.features.split(',').map(feature => feature.trim()) // Convert features from string to array
    };
    if(this.mainImage == ''){
      alert("Main Image is required!");
      return;
    }
  
    this.productsService.createProduct(productData).subscribe((res: any) => {
      console.log(res);
      if(res==null){
        alert("Something went wrong! Contact the developer!");
        return;
      }
      const ask = confirm('Product added successfully! Do you want to add more products? (OK = yes, Cancel = go to dashboard)');
      if (ask) {
        window.location.reload();
      } else {
        this.router.navigateByUrl('/products');
      }
    });
  }
  
}
