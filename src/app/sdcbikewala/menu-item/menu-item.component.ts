
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.activatedRoute.snapshot.paramMap.get('menu') || '';
  }

  path ="";

}

