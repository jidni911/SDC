import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  apiUrl = environment.apiUrl
  productId: any
  product: any
  newFeature: string = '';
  newTag: string = '';
  constructor(private route: ActivatedRoute,private productservice: ProductsService) { }
// TODO test 
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productservice.getProduct(this.productId).subscribe((r: any) => {
      this.product = r;
    })
  }

  addFeature(): void {
    if (this.newFeature.trim()) {
      this.product.features.push(this.newFeature);
      this.newFeature = '';
    }
  }

  removeFeature(feature: string): void {
    this.product.features = this.product.features.filter((f:any) => f !== feature);
  }

  addTag(): void {
    if (this.newTag.trim()) {
      this.product.tags.push(this.newTag);
      this.newTag = '';
    }
  }

  removeTag(tag: string): void {
    this.product.tags = this.product.tags.filter((t:any) => t !== tag);
  }

  updateMainImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Upload logic
      console.log('Main Image Updated:', file);
    }
  }

  addGalleryImage(event: any): void {
    const files = event.target.files;
    for (let file of files) {
      // Upload logic
      console.log('Gallery Image Added:', file);
    }
  }

  removeGalleryImage(image: any): void {
    this.product.galleryImages = this.product.galleryImages.filter((img: any) => img !== image);
  }
}
