import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Jersey } from '../model/jersey';
import { JerseyService } from '../services/jersey.service';
import { environment } from 'src/environment';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  apiUrl = environment.apiUrl
  id: number | null = null;
  imageUrl: string | null = null;
  jersey: Jersey | null = null;
  // jerseys = [];
 

  constructor(private route: ActivatedRoute, private jerseyService: JerseyService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id) {
      this.jerseyService.getJersey(this.id).subscribe((v: any) => {
        this.jersey = v;
        this.imageUrl = this.apiUrl + v.images[0].url;
      })
    }
  }
  isClicked = false;
  onImageClick() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 400); // reset after animation duration
  }  
}
