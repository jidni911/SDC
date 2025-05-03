import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent {
  searchText = '';
  selectedCategory = '';
  selectedProduct: any = null;
  toastMessage = '';

  categories = [
    { name: 'Bikes', icon: 'bi bi-bicycle' },
    { name: 'Accessories', icon: 'bi bi-tools' },
    { name: 'Clothing', icon: 'bi bi-shop-window' }
  ];

  products = [
    { name: 'Mountain Bike', price: 899.99, image: 'assets/bike1.jpg', category: 'Bikes' },
    { name: 'Helmet', price: 49.99, image: 'assets/helmet.jpg', category: 'Accessories' },
    { name: 'Cycling Gloves', price: 19.99, image: 'assets/gloves.jpg', category: 'Accessories' },
    { name: 'Jersey', price: 39.99, image: 'assets/jersey.jpg', category: 'Clothing' }
  ];

  promotions = [
    {
      title: 'Spring Sale - Up to 30% Off!',
      description: 'Save big on top products this season.',
      image: 'assets/promo1.jpg'
    },
    {
      title: 'New Arrivals',
      description: 'Check out the latest cycling gear.',
      image: 'assets/promo2.jpg'
    }
  ];

  filteredProducts() {
    return this.products.filter(product => {
      const matchesCategory = this.selectedCategory === '' || product.category === this.selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  previewProduct(product: any) {
    this.selectedProduct = product;
  }

  addToCart(product: any) {
    this.toastMessage = `${product.name} added to cart!`;
    const toastElement = document.getElementById('cartToast');
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }
}
