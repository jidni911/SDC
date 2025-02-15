import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {
  orderitemId: any
  order: any
  orderItems:any[] = []
  constructor(private route: ActivatedRoute, private orderService: OrdersService) { }
  

  ngOnInit(): void {
    this.orderitemId = this.route.snapshot.paramMap.get('id');
    console.log( "orderitemId: " + this.orderitemId);

    this.orderService.getMemo(this.orderitemId).subscribe((r: any) => {
      console.log(r);
      this.orderItems = r;
      this.order = r[0].order;
      console.log(this.order);
      
    })
    
  }

}
