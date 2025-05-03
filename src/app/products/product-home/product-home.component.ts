import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Link {
  name: string;
  icon: string;
  url: string;
  active: boolean;
  color?: string;
}

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})

export class ProductHomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  getCurrentRoute() {
    return this.router.url;
  }
  links: Link[] = [
    { name: 'Dashboard', icon: 'bi bi-house-door', url: '/products', active: true },
    { name: 'Products', icon: 'bi bi-box', url: '/products/allProducts', active: true },
    { name: 'Orders', icon: 'bi bi-receipt', url: '/products/orders', active: true },
    { name: 'Customers', icon: 'bi bi-people', url: '/products/customers', active: false },
    { name: 'Reports', icon: 'bi bi-bar-chart', url: '/products/reports', active: false },
    { name: 'Settings', icon: 'bi bi-gear', url: '/products/settings', active: false },
    { name: 'POS', icon: 'bi bi-cash-coin', url: '/products/pos', active: true },
    { name: 'Sells History', icon: 'bi bi-clock-history', url: '/products/sellsHistory', active: true },
    { name: 'Customer History', icon: 'bi bi-person-lines-fill', url: '/products/customerHistory', active: true },
  ];
  quickActions: Link[] = [
    { name: 'Dashboard', icon: 'bi bi-house-door', url: '/products', active: true, color: 'primary' },
    { name: 'POS', icon: 'bi bi-cash-coin', url: '/products/pos', active: true, color: 'success' },
    { name: 'Sells History', icon: 'bi bi-clock-history', url: '/products/sellsHistory', active: true, color: 'info' },
    { name: 'Customer History', icon: 'bi bi-person-lines-fill', url: '/products/customerHistory', active: true, color: 'secondary' },
  ];


  isSidebarVisible = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


}
