import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';

interface Jersey {
  title: string;
  description: string;
  sizes: string[];
  price: number;
}

interface Order {
  name: string;
  phone: string;
  size: string;
  quantity: number;
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
      sizes: ['S', 'M', 'L', 'XL'],
      price: 1200
    },
    '2': {
      image: 'assets/photo/sdcbijoyjersey21.png',
      title: 'SDC বিজয় জার্সি ২০২১',
      description: 'Limited stock left! Grab your 2021 Victory jersey.',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 1000
    },
    '3': {
      image: 'assets/photo/sdcofficialjersey23.png',
      title: 'SDC অফিসিয়াল জার্সি ২০২৩',
      description: 'Our 2023 official team jersey — ride with pride!',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 1500
    }
  };

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
        sizes: data.sizes,
        price: data.price
      };
      this.imageUrl = data.image;
    }
  }

  placeOrder(form: { name: string; phone: string; size: string; quantity: number }) {
    this.orders.push({ ...form });
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


  sizes = [
    { size: '0-1 Y', chest: 22, length: 14 },
    { size: '2-3 Y', chest: 24, length: 16 },
    { size: '4-5 Y', chest: 30, length: 20 },
    { size: '6-7 Y', chest: 32, length: 22 },
    { size: '8-9 Y', chest: 34, length: 24 },
    { size: '10-12 Y', chest: 34, length: 25 },
    { size: 'S', chest: 36, length: 27 },
    { size: 'M', chest: 38, length: 28 },
    { size: 'L', chest: 40, length: 29 },
    { size: 'XL', chest: 42, length: 30 },
    { size: '2XL', chest: 44, length: 30 },
    { size: '3XL', chest: 46, length: 31 },
  ];
  

}
