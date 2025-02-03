import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {

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

  sellers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  addProductForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      discountPrice: [''],
      stockStatus: ['', Validators.required],
      quantity: ['', Validators.required],
      mainImage: [''],
      galleryImages: [''],
      dimensions: [''],
      weight: [''],
      seller: ['', Validators.required],
      tags: [''],
      origin: [''],
      features: [''],
    });
  }

  handleMainImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.addProductForm.get('mainImage')?.setValue(file);
  }

  handleGalleryImages(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.addProductForm.get('galleryImages')!.setValue(files);
  }

  onSubmit() {
    console.log(this.addProductForm.value);
  }
}
