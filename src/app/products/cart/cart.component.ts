import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedTotal: number = 0


  constructor(private router: Router, private cartService: CartService, private ps: ProductsService) { }
  ngOnInit(): void {

    if (!AppComponent.getUser()) {
      this.router.navigateByUrl('/signin')
    }
    this.cartService.getCart().subscribe((r: any) => {
      this.cart = r;
    })
  }

  cart: any = null

  getTotal(): number {
    return this.cart.items.reduce((acc: number, item: any) => acc + (item.product.discountPrice * item.quantity), 0);
  }
  updateSelectedTotal() {
    let selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    let seletedItemIds = Array.from(selectedItems).map((v) => { return Number((v as HTMLInputElement).id) });    
    this.selectedTotal = this.cart.items.reduce((acc: number, item: any) => seletedItemIds.includes(item.id) ? acc + (item.product.discountPrice * item.quantity) : acc, 0);
  }

  removeItem(itemid: any) {
    this.cartService.removeFromCart(itemid).subscribe((r: any) => {
      this.ngOnInit()
    })


  }

  getUrlof(url: any) {
    return environment.apiUrl + url
  }

  increaseQuantity(item: any) {
    if (item.product.quantity <= item.quantity) {
      return
    }
    this.setQuantity(item.id, item.quantity + 1)
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      this.setQuantity(item.id, item.quantity - 1)
    }
  }

  setQuantity(itemId: any, quantity: any) {
    this.cartService.setQuantity(itemId, quantity).subscribe((r: any) => {
      this.cart = r
    })
  }

  removeSelectedItems() {
    let ids : any[]= [];
    document.querySelectorAll('input[type="checkbox"]').forEach((v) => {
      if((v as HTMLInputElement).checked){
        ids.push((v as HTMLInputElement).id)
      }
    });
    this.cartService.removeFromCart(ids).subscribe(()=>{
      this.ngOnInit()
    })

  }


  checkout() {
    let ids : any[]= [];
    document.querySelectorAll('input[type="checkbox"]').forEach((v) => {
      if((v as HTMLInputElement).checked){
        ids.push((v as HTMLInputElement).id)
      }
    });
    this.router.navigate(['/products/checkout'], { queryParams: { ids: ids.join(',') } })
  }


  markAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach((v) => {
      (v as HTMLInputElement).checked = true;
    });
    this.updateSelectedTotal()
  }

  markNone() {
    document.querySelectorAll('input[type="checkbox"]').forEach((v) => {
      (v as HTMLInputElement).checked = false;
    });
    this.updateSelectedTotal()
  }
}
