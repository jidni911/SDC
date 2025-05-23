import { Component } from '@angular/core';

interface Links {
  link: string;
  image: string;
}
@Component({
  selector: 'app-important-links',
  templateUrl: './important-links.component.html',
  styleUrls: ['./important-links.component.scss']
})
export class ImportantLinksComponent {
  importantLinks : Links[] = [
    {
      image: 'https://www.bike-discount.de/media/image/1d/77/7e/Radon_1500x450_en_800x800.png',
      link: 'https://www.bike-discount.de/'
    },{
      image: 'https://www.bike-discount.de/media/image/7b/12/b1/Jobs_1500x450_en_800x800.png',
      link: 'https://www.bike-discount.de/'
    },{
      image: 'https://www.bike-discount.de/media/image/be/0d/65/Megastore_1500x450_en_800x800.png',
      link: 'https://www.bike-discount.de/'
    },{
      image: 'https://www.bike-discount.de/media/image/55/ae/df/Blog_1500x450_en_800x800.png',
      link: 'https://www.bike-discount.de/'
    }
  ]
}
