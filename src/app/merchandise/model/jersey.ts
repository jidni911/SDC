export interface Jersey {
  id: number
  images: any[];
  title: string;
  description: string;
  halfSleevePrice: number;
  fullSleevePrice: number;
  babyHalfSleevePrice: number;
  babyFullSleevePrice: number;
  customHalfSleevePrice: number;
  customFullSleevePrice: number;
}

export interface Size {
  name: string;
  chest: number;
  length: number;
}

export interface Order {
  name: string;
  phone: string;
  items: OrderItem[];
  deliveryCharge: number;
  address: string;
}

export interface OrderItem {
  jersey: Jersey;
  size: Size;
  sleeve: string;
  quantity: number;
  price: number;
}



export var freePickupPointAddresses: string[] = [
  'Dhaka',
  'Chattogram',
  'Rajshahi',
  'Khulna',
  'Barishal',
  'Sylhet',
  'Rangpur',
  'Mymensingh'
];

export var sizes: Size[] = [
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