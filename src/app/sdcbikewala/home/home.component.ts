import {WebComponentService } from './../../components/web/web.component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor( private  webComponent: WebComponentService) { }
  ngOnDestroy(): void {
    this.webComponent.show();
  }
  ngOnInit(): void {
    this.webComponent.hide();
  }

}
