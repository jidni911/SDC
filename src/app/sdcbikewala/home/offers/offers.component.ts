import { Component } from '@angular/core';

interface offer {
  name: string;
  image: string;
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  offers: offer[] = [
    {
      name: 'ojersey4free',
      image: 'https://www.bike-discount.de/media/image/2c/e4/04/Herren_Gratisaktion_2022_1200x800_enD8KvWjEhbSLPz_800x800.jpg'
    },
    {
      name:'bikes2025',
      image:'https://www.bike-discount.de/media/image/12/2c/08/Cube_2025_BP_1200x800_en9I7kBOGUsIRRr_800x800.jpg'
    },
    {
      name:'newArrivals2025',
      image:'https://www.bike-discount.de/media/image/dd/d6/38/Vaude_Neuheiten_2025_1200x800_en_800x800.jpg'
    },
    {
      name:'topqualityroadbikes',
      image:'https://www.bike-discount.de/media/image/09/1b/45/Radon_Roadbikes_1200x800_02_en_800x800.jpg'
    },
    {
      name: 'moregripmorepower',
      image: 'https://www.bike-discount.de/media/image/92/5e/6c/MTB_Reifen_02_1200x800_enESkQlMhMidiVm_800x800.jpg'
    },
    {
      name:'smartcompanion',
      image:'https://www.bike-discount.de/media/image/bd/c5/b7/Fahrradcomputer_02_1200x800_en_800x800.jpg'
    },
    {
      name:'fullcontrolmaximumperformance',
      image:'https://www.bike-discount.de/media/image/d5/d9/0a/MTB_Gabel_Daempfer_en_800x800.jpg'
    },
    {
      name:'transportsolutions',
      image:'https://www.bike-discount.de/media/image/f4/0f/5f/Transport_1200x800_en_800x800.jpg'
    }
  ]
}
