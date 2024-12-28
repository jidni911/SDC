import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-seller',
  templateUrl: './dashboard-seller.component.html',
  styleUrls: ['./dashboard-seller.component.scss']
})
export class DashboardSellerComponent {


  currentTab = "dashboard";
  orders : any[] =[];
  products: any[] = [];
  reviews: any[]=[];
  overallRating = 3.5
  productRatings: any[] = []

}
