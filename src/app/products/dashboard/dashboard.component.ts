import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  metrics = [
    { title: 'Total Sales', value: '$15,200', icon: 'bi bi-cash-coin' },
    { title: 'Products', value: '126', icon: 'bi bi-box' },
    { title: 'Orders', value: '340', icon: 'bi bi-receipt' },
    { title: 'Customers', value: '87', icon: 'bi bi-people' }
  ];

  recentActivity = [
    { time: '10 mins ago', action: 'Added', user: 'Admin', details: 'Added new product "Road Helmet"' },
    { time: '30 mins ago', action: 'Updated', user: 'Staff', details: 'Updated stock for "MTB Gloves"' },
    { time: '1 hour ago', action: 'Deleted', user: 'Admin', details: 'Removed category "Clearance"' },
    { time: '2 hours ago', action: 'Order', user: 'Customer #1042', details: 'Placed order for 3 items' }
  ];
}
