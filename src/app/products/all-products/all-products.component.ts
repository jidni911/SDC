import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})


export class AllProductsComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((r: any) => {
      this.products = r;
      if (AppComponent.getUser()) {
        this.cartService.getCart(AppComponent.getUser().id).subscribe((res: any) => {
          this.cart = res;
          this.cartItemIds = res.items.map((v: any) => { return v.product_id });
        })
      }
    })
  }
  products: any[] = []
  cart: any = null
  cartItemIds: any[] = []

  inCart(id: any) {
    return this.cartItemIds.includes(id)
  }

  addToCart(product: any) {
    if (AppComponent.getUser()) {
      const userId = AppComponent.getUser().id;
      this.cart.items.push({
        product_id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price
      })
      this.cartService.updateCart(userId, this.cart).subscribe((res: any) => {
        this.cart = res;
        this.ngOnInit()
      });
    } else {
      this.router.navigateByUrl('/signin');
    }
  }

  loadMore(){
    this.products.forEach(p=>{
      this.products.push(p)
    })
  }
  generateRandomProduct(): any {
    const categories = ["Bikes", "Accessories", "Tools", "Apparel"];
    const brands = ["TrailBlazer", "SafeRide", "AirMaster", "RideComfort", "CycleEssentials", "BrightPath", "CycleWear", "SecureRide", "ComfortRide", "SpeedWear"];
    const sellers = ["seller01", "seller02", "seller03", "seller04", "seller05"];
    const stockStatusOptions = ["In Stock", "Out of Stock"];

    const randomId = () => `prod${Math.floor(1000 + Math.random() * 9000)}`;
    const randomPrice = () => parseFloat((Math.random() * (500 - 10) + 10).toFixed(2));
    const randomDiscount = (price: number) => (Math.random() > 0.5 ? parseFloat((price - Math.random() * (price * 0.3)).toFixed(2)) : null);
    const randomStock = () => Math.random() > 0.5 ? Math.floor(Math.random() * 200) + 1 : 0;

    const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const id = randomId();
    const price = randomPrice();
    const quantityAvailable = randomStock();
    const stockStatus = quantityAvailable > 0 ? "In Stock" : "Out of Stock";

    return {
      id: id,
      name: `Product ${id}`,
      description: `This is a description for ${id}. A high-quality product for cycling enthusiasts.`,
      category: randomItem(categories),
      brand: randomItem(brands),
      price: price,
      discountPrice: randomDiscount(price),
      currency: "USD",
      stockStatus: stockStatus,
      quantityAvailable: quantityAvailable,
      mainImage: `https://via.placeholder.com/600x400?text=${id}`,
      galleryImages: [
        `https://via.placeholder.com/600x400?text=${id}-1`,
        `https://via.placeholder.com/600x400?text=${id}-2`
      ],
      dimensions: {
        height: `${Math.floor(Math.random() * 100) + 10} cm`,
        width: `${Math.floor(Math.random() * 100) + 10} cm`,
        depth: `${Math.floor(Math.random() * 50) + 10} cm`
      },
      weight: `${(Math.random() * 5 + 1).toFixed(2)} kg`,
      sellerId: randomItem(sellers)
    };
  }

}
