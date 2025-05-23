import { Component } from '@angular/core';

interface Category{
  name: string;
  image: string
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories: Category[] = [
    { name: 'Bikes', image: 'https://www.bike-discount.de/media/image/f3/52/2c/Fahrrad_1200x1200_en_800x800.jpg' },
    { name: 'Parts', image: 'https://www.bike-discount.de/media/image/65/df/7d/Teile_1200x1200_en_800x800.jpg' },
    { name: 'Accessories', image: 'https://www.bike-discount.de/media/image/ac/bf/12/Zubehoer_1200x1200_en_800x800.jpg' },
    { name: 'Clothing', image: 'https://www.bike-discount.de/media/image/2a/83/34/Bekleidung_1200x1200_en_800x800.jpg' },
    { name: 'Training & Leisure time', image: 'https://www.bike-discount.de/media/image/3c/04/11/Freizeit-Training_1200x1200_en_800x800.jpg' },
    { name: 'Electronics', image: 'https://www.bike-discount.de/media/image/82/c8/d5/Elektronik_1200x1200_en_800x800.jpg' },
  ]
}
