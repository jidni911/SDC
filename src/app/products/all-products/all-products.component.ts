import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})


export class AllProductsComponent implements OnInit {
  user: User | null = null
  geturlof(path: any) {
    return environment.apiUrl + path;
  }

  isSeller(){
    return Array.from(this.user?.roles || []).map((v : any) => v.name).includes('ROLE_SELLER')
  }

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadProducts(0);
    this.usersService.user.subscribe((res: User | null) => {
      this.user = res
    })

    if (this.user) {
      this.cartService.getCart().subscribe((res: any) => {
        this.cart = res;

        this.cartItemIds = res.items.map((v: any) => { return v.product.id });
      })
    }
  }
  products: any[] = []
  cart: any = null
  cartItemIds: any[] = []
  page: any;

  inCart(id: any) {
    return this.cartItemIds.includes(id)
  }

  addToCart(product: any) {
    if (this.user) {
      this.cartService.addToCart(product.id).subscribe((res: any) => {
        this.cart = res;
        this.cartItemIds = res.items.map((v: any) => { return v.product.id });

      })
    } else {
      this.router.navigateByUrl('/signin');
    }
  }

  loadMore() {
    this.products.forEach(p => {
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
      mainImage: `https://placehold.co/600x400?text=${id}`,//https://placehold.co/600x400?text=Hello+World
      galleryImages: [
        `https://placehold.co/600x400?text=${id}-1`,
        `https://placehold.co/600x400?text=${id}-2`
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

  search($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target.value == '') {
      this.loadProducts(0);
      return;
    }
    this.productService.searchProducts(target.value).subscribe((res: any) => {
      this.products = res.content;
    })
  }

  onPageChange(pageNumber: number): void {
    this.loadProducts(pageNumber);
  }

  loadProducts(pageNumber: number): void {
    this.productService.getProducts(pageNumber).subscribe((r: any) => {
      this.page = r;
      this.products = r.content;
    });
  }
}
