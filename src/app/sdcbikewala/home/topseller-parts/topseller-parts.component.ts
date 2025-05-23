import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface TopsellerPart {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  discount: boolean;
  new: boolean;
}
@Component({
  selector: 'app-topseller-parts',
  templateUrl: './topseller-parts.component.html',
  styleUrls: ['./topseller-parts.component.scss']
})
export class TopsellerPartsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;
  topsellerParts: TopsellerPart[] = [
    {
      name: 'Ergon',
      description: 'BE1 - Enduro Promotion Backpack',
      image: 'https://www.bike-discount.de/media/image/18/c9/d0/Ergon_BE1-Enduro-Rucksack_schwarz-blau_45000384_1_300x300.jpg',
      price: 19.99,
      rating: 4.3,
      discount: true,
      new: false
    },
    {
      name: 'Fulcrum',
      description: 'E-Fire 700 27.5" Center Lock Shimano HG Boost...',
      image: 'https://www.bike-discount.de/media/image/ff/a5/70/E-Fire-700-Laufradsatz_300x300.jpg',
      price: 99.99,
      rating: 4.6,
      discount: true,
      new: false
    },
    {
      name: 'Shimano',
      description: 'SH-XM7 - MTB Touring Shoes',
      image: 'https://www.bike-discount.de/media/image/84/e5/0a/Shimano_SH-XM7_ESHXM7NC380SG00_gtx_300x300.jpg',
      price: 79.99,
      rating: 4.0,
      discount: true,
      new: false
    },
    {
      name: 'Scott',
      description: 'Addict RC eRIDE 20',
      image: 'https://www.bike-discount.de/media/image/48/39/ac/Fox-Racing-910-27-405-20148708-36-Float-AWL-HD-29-Rail-Sweep-Adj-160-Tapered-Boost-1dxFNAOyiTlodo_300x300.png',
      price: 2499,
      rating: 4.9,
      discount: true,
      new: false
    },
    {
      name: 'SRAM',
      description: 'SX Eagle Cassette 10-50 teeth',
      image: 'https://www.bike-discount.de/media/image/75/d3/d0/sram-00-2418-095-000-20124511-SX-Eagle-KassetteHJQQWYTvIVmE5_300x300.jpg',
      price: 64.99,
      rating: 4.8,
      discount: false,
      new: true
    },
    {
      name: 'Bluegrass',
      description: 'Rogue G12NO1',
      image: 'https://www.bike-discount.de/media/image/a2/c9/45/bluegrass_Rogue_G12NO1_1_300x300.jpg',
      price: 199.95,
      rating: 4.7,
      discount: false,
      new: true
    },
    {
      name: 'Ergon',
      description: 'BE1 - Enduro Promotion Backpack',
      image: 'https://www.bike-discount.de/media/image/18/c9/d0/Ergon_BE1-Enduro-Rucksack_schwarz-blau_45000384_1_300x300.jpg',
      price: 19.99,
      rating: 4.3,
      discount: true,
      new: false
    },
    {
      name: 'Fulcrum',
      description: 'E-Fire 700 27.5" Center Lock Shimano HG Boost...',
      image: 'https://www.bike-discount.de/media/image/ff/a5/70/E-Fire-700-Laufradsatz_300x300.jpg',
      price: 99.99,
      rating: 4.6,
      discount: true,
      new: false
    },
    {
      name: 'Shimano',
      description: 'SH-XM7 - MTB Touring Shoes',
      image: 'https://www.bike-discount.de/media/image/84/e5/0a/Shimano_SH-XM7_ESHXM7NC380SG00_gtx_300x300.jpg',
      price: 79.99,
      rating: 4.0,
      discount: true,
      new: false
    },
    {
      name: 'Scott',
      description: 'Addict RC eRIDE 20',
      image: 'https://www.bike-discount.de/media/image/48/39/ac/Fox-Racing-910-27-405-20148708-36-Float-AWL-HD-29-Rail-Sweep-Adj-160-Tapered-Boost-1dxFNAOyiTlodo_300x300.png',
      price: 2499,
      rating: 4.9,
      discount: true,
      new: false
    },
    {
      name: 'SRAM',
      description: 'SX Eagle Cassette 10-50 teeth',
      image: 'https://www.bike-discount.de/media/image/75/d3/d0/sram-00-2418-095-000-20124511-SX-Eagle-KassetteHJQQWYTvIVmE5_300x300.jpg',
      price: 64.99,
      rating: 4.8,
      discount: false,
      new: true
    },
    {
      name: 'Bluegrass',
      description: 'Rogue G12NO1',
      image: 'https://www.bike-discount.de/media/image/a2/c9/45/bluegrass_Rogue_G12NO1_1_300x300.jpg',
      price: 199.95,
      rating: 4.7,
      discount: false,
      new: true
    }
  ];

  private scrollInterval: any;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollLeft -= 220;
  }

  scrollRight(): void {
    const el = this.scrollContainer.nativeElement;
    el.scrollLeft += 220;

    // Loop back to start if we hit the end
    if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
      setTimeout(() => el.scrollLeft = 0, 400);
    }
  }

  startAutoScroll(): void {
    this.scrollInterval = setInterval(() => {
      this.scrollRight();
    }, 3000); // scroll every 3 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.scrollInterval);
  }
}