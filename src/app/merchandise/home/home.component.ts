import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sdcbijoyjersey25 = 'assets/photo/sdcbijoyjersey25.png';
  sdcbijoyjersey21 = 'assets/photo/sdcbijoyjersey21.png';
  sdcofficialjersey23 = 'assets/photo/sdcofficialjersey23.png';

  merchandiseList = [
    {
      imgSrc: this.sdcbijoyjersey25,
      alt: 'SDC Bijoy Jersey 2025',
      title: 'SDC বিজয় জার্সি ২০২৫',
      description: 'Celebrate Victory Day with our exclusive 2025 jersey.',
      buttonText: 'Get Now',
      buttonLink: '/merchandise/item/1'
    },
    {
      imgSrc: this.sdcbijoyjersey21,
      alt: 'SDC Bijoy Jersey 2021',
      title: 'SDC বিজয় জার্সি ২০২১',
      description: 'Limited stock left! Grab your 2021 Victory jersey.',
      buttonText: 'Shop Now',
      buttonLink: '/merchandise/item/2'
    },
    {
      imgSrc: this.sdcofficialjersey23,
      alt: 'SDC Official Jersey 2023',
      title: 'SDC অফিসিয়াল জার্সি ২০২৩',
      description: 'Our 2023 official team jersey — ride with pride!',
      buttonText: 'Buy Now',
      buttonLink: '/merchandise/item/3'
    }
  ];
}
