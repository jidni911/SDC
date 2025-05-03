import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  sellerid: any = null

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.sellerid = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
