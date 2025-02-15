import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/service/orders.service';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

  apiUrl = environment.apiUrl;
  orderitemId: any;
  order: any;
  orderItems: any[] = [];
  suggestedProducts: any[] = [];
  serviceCharge: number = 50;
  deliveryCharge: number = 100;
  discount: number = 0;

  constructor(private route: ActivatedRoute, private orderService: OrdersService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.orderitemId = this.route.snapshot.paramMap.get('id');
    this.orderService.getMemo(this.orderitemId).subscribe((r: any) => {
      this.orderItems = r;
      this.order = r[0].order;
      console.log(r);
    });
  }

  getSubtotal(): number {
    return this.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.serviceCharge + this.deliveryCharge - this.discount;
  }

  removeItem(item: any): void {
    this.orderItems = this.orderItems.filter(i => i !== item);
  }

  suggestProduct(event: any): void {
    const query = event.target.value;
    if (query.length < 2) {
      this.suggestedProducts = [];
      return;
    }
    this.productService.searchSellerProducts(query).subscribe((products: any) => {
      this.suggestedProducts = products.content;
      console.log(products);

    });
  }

  addProduct(product: any): void {
    this.orderItems.push({ product, price: product.discountPrice || product.price, quantity: 1 });
    this.suggestedProducts = [];
  }

  confirmOrderAndPrint() {
    this.orderService.confirmOrder(this.orderItems, this.serviceCharge, this.deliveryCharge, this.discount)
      .subscribe((r: any) => {
      const blob = new Blob([r], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();
      window.URL.revokeObjectURL(url);

      });

  }
}
