import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoService } from 'src/app/service/memo.service';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

  apiUrl = environment.apiUrl;
  memoId: any;
  memo: any;
  memoItems: any[] = [];
  suggestedProducts: any[] = [];
  serviceCharge: number = 50;
  deliveryCharge: number = 100;
  discount: number = 0;

  constructor(private route: ActivatedRoute, private memoService: MemoService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.memoId = this.route.snapshot.paramMap.get('id');
    console.log(this.memoId);
    
    if (this.memoId) {
      this.memoService.getMemo(this.memoId).subscribe((r: any) => {
        console.log(r);
        
        this.memo = r;
        this.memoItems = r.memoItems;
      });
    }
  }

  getSubtotal(): number {
    return this.memoItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.serviceCharge + this.deliveryCharge - this.discount;
  }

  removeItem(item: any): void {
    this.memoItems = this.memoItems.filter(i => i !== item);
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
    this.memoItems.push({ product, price: product.discountPrice || product.price, quantity: 1 });
    this.suggestedProducts = [];
  }

  confirmOrderAndPrint() {
    // this.orderService.confirmOrder(this.orderItems, this.serviceCharge, this.deliveryCharge, this.discount)
    //   .subscribe((r: any) => {
    //   const blob = new Blob([r], { type: 'text/html' });
    //   const url = window.URL.createObjectURL(blob);
    //   const iframe = document.createElement('iframe');
    //   iframe.style.display = 'none';
    //   iframe.src = url;
    //   document.body.appendChild(iframe);
    //   iframe.contentWindow?.print();
    //   window.URL.revokeObjectURL(url);

    //   });

  }
}
