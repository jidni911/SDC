import { Component } from '@angular/core';
import { Order } from '../model/jersey';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent {

  verifiedOrders: Order[] = [];
}
