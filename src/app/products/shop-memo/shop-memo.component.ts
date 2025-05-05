import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { MemoService } from 'src/app/service/memo.service';
import { ProductsService } from 'src/app/service/products.service';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-shop-memo',
  templateUrl: './shop-memo.component.html',
  styleUrls: ['./shop-memo.component.scss']
})
export class ShopMemoComponent implements OnInit {
  constructor(
    private memoService: MemoService, 
    private productService: ProductsService, 
    private router: Router, 
    private usersService: UsersService
  ) { }
  user :User | null = null
  apiUrl = environment.apiUrl
  buyer : any
  ngOnInit() { 
    this.usersService.user.subscribe((res: User|null) => {
      this.user = res
    })
    this.memoService.nextMemoNumber().subscribe((res: any) => {
      this.memoNumber = res
    })
  }
  isSeller(): any {
    if (this.user) {
      if (Array.from(this.user.roles || []).map((v: any) => { return v.name }).includes('ROLE_SELLER') || Array.from(this.user.roles || []).map((v: any) => { return v.name }).includes('ROLE_ADMIN')) {
        return true
      }
    }
    return false
  }



  // Memo Info
  memoNumber: string = '0';
  memoDate = new Date();

  serviceCharge: number = 0;
  deliveryCharge: number = 0;
  discount: number = 0;

  // Buyer info
  buyerName: string = '';
  buyerEmail: string = '';
  buyerPhone: string = '';
  buyerAddress: string = '';

  // Product info
  searchQuery: string = '';
  searchSuggestions: any[] = [];
  items: { product: any, quantity: number, price: number}[] = [];


  // Handle search input
  onSearchInput() {
    if (this.searchQuery === '') {
      this.searchSuggestions = [];
    } else {
      this.productService.searchSellerProducts(this.searchQuery).subscribe((res: any) => {
        this.searchSuggestions = res.content
      })
    }

  }

  // Select product from suggestion
  isSelected(product : any){
    
    return this.items.some(item => item.product.id === product.id)
  }
  selectProduct(product: any) {
    if(this.isSelected(product)){
      this.items.filter(item => item.product.id === product.id)[0].quantity++;
      return
    }

    let item = {product: product, quantity: 1, price: product.discountPrice || product.price};
    
    this.items.push(item);

  }

  clearSearch() {
    this.searchQuery = '';
    this.searchSuggestions = [];
  }

  removeItem(item: any): void {
    this.items = this.items.filter(i => i !== item);
  }
  removeAllItems(){
    this.items = [];
  }


  // Calculate total amount
  get totalAmount() {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) + this.serviceCharge + this.deliveryCharge - this.discount;
  }

  onRoundUp(){
    let t = this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) + this.serviceCharge + this.deliveryCharge;
    let n = t<100 ? 10 : t<1000 ? 100 : t<10000 ? 1000 : 10000
    this.discount =t - Math.floor(t/n) * n;
  }
  onServiceCharge(amount: number) {
    this.serviceCharge = amount;
  }

  onDeliveryCharge(amount: number) {
    this.deliveryCharge = amount;
  }

  demo(){
    this.buyerName = 'John Doe';
    this.buyerEmail = '9i9ZU@example.com';
    this.buyerPhone = '1234567890';
    this.buyerAddress = '123 Main St, Anytown USA';
    this.serviceCharge = 100;
    this.deliveryCharge = 50;
    this.discount = 10;
  }

  printMemo(){
    this.memoService.printMemo(this.prepareMemo()).subscribe((r: any) => {
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

  // Save Memo function
  saveMemo() {
    if (this.buyerName && this.buyerPhone && this.totalAmount > 0) {
      let memo = this.prepareMemo()

      this.memoService.saveMemo(memo).subscribe((res: any) => {
        this.router.navigate(['/products/allMemo']);

      })
    } else {
      alert('Please complete all sections before saving.');
    }
  }

  executeMemo() {
    this.memoService.executeMemo(this.prepareMemo()).subscribe((res: any) => {
      if (res) {
        this.printMemo()
      } else {
        alert('Error executing memo');
      }
    })
  }


  prepareMemo(){
    return {
      memoNumber: this.memoNumber,
      date: this.memoDate,
      buyerName: this.buyerName,
      buyerAddress: this.buyerAddress,
      buyerPhoneNumber: this.buyerPhone,
      buyerEmail: this.buyerEmail,
      buyerId: this.buyer?.id,
      subtotal: this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0),
      discount: this.discount,
      deliveryCharge: this.deliveryCharge,
      serviceCharge: this.serviceCharge,
      total: this.totalAmount,
      memoItems: this.items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.price
      })),
    }
  }
}
