import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {

  images=[
    'https://www.bike-discount.de/media/image/92/46/60/Bike_Sale_2024_1500x640_en_02_1280x1280.jpg',
    'https://www.bike-discount.de/media/image/99/57/a9/Sonderposten_2024_1500x640_en77Ct80kdO1eH4_1280x1280.jpg',
    'https://www.bike-discount.de/media/image/8a/c4/0d/Bike_Wear_SS25_02_1500x640_en_800x800.jpg',
    'https://www.bike-discount.de/media/image/2e/8a/f8/POC_Cularis_2025_1500x640_en_800x800.jpg',
    'https://www.bike-discount.de/media/image/1d/d8/7b/Shimano_Schuhe_1500x640_en_800x800.jpg',
  ]
}
