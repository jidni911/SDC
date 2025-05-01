import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';

interface Jersey {
  title: string;
  description: string;
  halfSleevePrice: number;
  fullSleevePrice: number;
  babyHalfSleevePrice: number;
  babyFullSleevePrice: number;
  customHalfSleevePrice: number;
  customFullSleevePrice: number;

}

interface Size {
  name: string;
  chest: number;
  length: number;
}

interface Order {
  name: string;
  phone: string;
  items: OrderItem[];
  deliveryCharge: number;
  address: string;
}

interface OrderItem {
  jersey: Jersey;
  size: Size;
  sleeve: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: string | null = null;
  imageUrl: string | null = null;

  // Sample jersey data; could load from API instead
  jerseys: { [key: string]: Jersey & { image: string } } = {
    '1': {
      image: 'assets/photo/sdcbijoyjersey25.png',
      title: 'SDC বিজয় জার্সি ২০২৫',
      description: 'Celebrate Victory Day with our exclusive 2025 jersey.',
      halfSleevePrice:350,
      fullSleevePrice:450,
      babyHalfSleevePrice:300,
      babyFullSleevePrice:400,
      customHalfSleevePrice:400,
      customFullSleevePrice:500
    },
    '2': {
      image: 'assets/photo/sdcbijoyjersey21.png',
      title: 'SDC বিজয় জার্সি ২০২১',
      description: 'Limited stock left! Grab your 2021 Victory jersey.',
      halfSleevePrice:350,
      fullSleevePrice:450,
      babyHalfSleevePrice:300,
      babyFullSleevePrice:400,
      customHalfSleevePrice:400,
      customFullSleevePrice:500
    },
    '3': {
      image: 'assets/photo/sdcofficialjersey23.png',
      title: 'SDC অফিসিয়াল জার্সি ২০২৩',
      description: 'Our 2023 official team jersey — ride with pride!',
      halfSleevePrice:350,
      fullSleevePrice:450,
      babyHalfSleevePrice:300,
      babyFullSleevePrice:400,
      customHalfSleevePrice:400,
      customFullSleevePrice:500
    }
  };

  currentOrder : Order = { name: '', phone: '', items: [] as OrderItem[], deliveryCharge: 0, address: 'Dhaka' };
  deliveryOption: string = "Free Pick Up Point";
  jersey: Jersey | null = null;
  orders: Order[] = [];
  verifiedOrders: Order[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    if (this.id && this.jerseys[this.id]) {
      const data = this.jerseys[this.id];
      this.jersey = {
        title: data.title,
        description: data.description,
        halfSleevePrice: data.halfSleevePrice,
        fullSleevePrice: data.fullSleevePrice,
        babyHalfSleevePrice: data.babyHalfSleevePrice,
        babyFullSleevePrice: data.babyFullSleevePrice,
        customHalfSleevePrice: data.customHalfSleevePrice,
        customFullSleevePrice: data.customFullSleevePrice
      };
      this.imageUrl = data.image;
    }
  }

  placeOrder(form: { name: string; phone: string; }) {
    // this.orders.push({ ...form });
    // show a toast or alert
    this.showToast('Order placed successfully! 🎉');
  }

  verifyOrder(order: Order) {
    this.verifiedOrders.push(order);
    this.orders = this.orders.filter(o => o !== order);
    this.showToast('Order verified! ✅')
  }

  toastMessage: string | null = null;

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // Hide after 3 seconds
  }

  currentOrderToVerify: any = null;

  openConfirmModal(order: any) {
    this.currentOrderToVerify = order;
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  confirmVerification() {
    if (this.currentOrderToVerify) {
      this.verifiedOrders.push(this.currentOrderToVerify);
      this.orders = this.orders.filter(o => o !== this.currentOrderToVerify);
      this.currentOrderToVerify = null;
      this.showToast('Order verified successfully! ✅');
      const modalElement = document.getElementById('confirmModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal?.hide();
      }
    }
  }


  isClicked = false;

  onImageClick() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 400); // reset after animation duration
  }


  sizes : Size[] = [
    { name: 'Baby 0-1 Y', chest: 22, length: 14 },
    { name: 'Baby 2-3 Y', chest: 24, length: 16 },
    { name: 'Baby 4-5 Y', chest: 30, length: 20 },
    { name: 'Baby 6-7 Y', chest: 32, length: 22 },
    { name: 'Baby 8-9 Y', chest: 34, length: 24 },
    { name: 'Baby 10-12 Y', chest: 34, length: 25 },
    { name: 'Regular S', chest: 36, length: 27 },
    { name: 'Regular M', chest: 38, length: 28 },
    { name: 'Regular L', chest: 40, length: 29 },
    { name: 'Regular XL', chest: 42, length: 30 },
    { name: 'Regular 2XL', chest: 44, length: 30 },
    { name: 'Regular 3XL', chest: 46, length: 31 },
  ];
  chest: number = 0;
  length: number = 0;

  addOrderItem(size: Size, sleeve: string) {
    let price = 0;
    if(size.name.toLowerCase().startsWith('baby')){
      if(sleeve.toLowerCase() == 'half'){
        price = this.jersey!.babyHalfSleevePrice;
      }else{
        price = this.jersey!.babyFullSleevePrice;
      }
    }else{
      if(size.name.toLowerCase().startsWith('custom')){
        size.chest = this.chest;
        size.length = this.length;
        if(sleeve.toLowerCase() == 'half'){
          price = this.jersey!.customHalfSleevePrice;
        }else{
          price = this.jersey!.customFullSleevePrice;
        }
      }else{
        if(sleeve.toLowerCase() == 'half'){
          price = this.jersey!.halfSleevePrice;
        }else{
          price = this.jersey!.fullSleevePrice;
        }
      }
    }
    
    let orderItem : OrderItem = {
      jersey: this.jersey!,
      size: size,
      sleeve: sleeve,
      quantity: 1,
      price: price
    };

    this.currentOrder.items.push(orderItem);
  }

  removeOrderItem(orderItem: OrderItem) {
    this.currentOrder.items = this.currentOrder.items.filter(item => item !== orderItem);
  }


  freePickupPointAddresses : string[] = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Khulna',
    'Barishal',
    'Sylhet',
    'Rangpur',
    'Mymensingh'
  ];
}
