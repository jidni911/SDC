import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface TopsellerClothing {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  discount: boolean;
  new: boolean;
}
@Component({
  selector: 'app-topseller-clothing',
  templateUrl: './topseller-clothing.component.html',
  styleUrls: ['./topseller-clothing.component.scss']
})
export class TopsellerClothingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;
  topsellerColthins: TopsellerClothing[] = [
    {
      name: 'Mavic',
      description: 'Essential II - Bib Shorts with Pad',
      image: 'https://www.bike-discount.de/media/image/b7/9d/1a/Mavic_Essential_II_Tragerhose_mit_Polster_LC1676800-S_-1_300x300.jpg',
      price: 44.95,
      rating: 5,
      discount: true,
      new: false
    },
    {
      name: 'Five Ten',
      description: 'Freerider - MTB Shoes',
      image: 'https://www.bike-discount.de/media/image/bb/a2/a1/Five-Ten-Five-Ten_Freerider-MTB-Schuhe_HP9936_300x300.jpg',
      price: 79.95,
      rating: 5,
      discount: false,
      new: false
    },
    {
      name: 'Bluegrass',
      description: 'Rogue - MTB Helmet',
      image: 'https://www.bike-discount.de/media/image/a2/c9/45/bluegrass_Rogue_G12NO1_1_300x300.jpg',
      price: 39.99,
      rating: 4.0,
      discount: true,
      new: false
    },
    {
      name: 'dirtlej',
      description: 'DirtSuit Core Edition Black Label - Mud Overall',
      image: 'https://www.bike-discount.de/media/image/e2/4a/27/dirtlej_DirtSuit-Core-Edition-Blacklabel-Matschoverall_20220102_1_300x300.jpg',
      price: 229,
      rating: 4.9,
      discount: false,
      new: false
    },
    {
      name: 'TSG',
      description: 'Trailz - MTB Shorts',
      image: 'https://www.bike-discount.de/media/image/1f/28/05/TSG_Trailz_MTB_Shorts_44417923-379-S_1_300x300.jpg',
      price: 34,
      rating: 3,
      discount: false,
      new: false
    },
    {
      name: 'Northwave',
      description: 'Force - Jersey',
      image: 'https://www.bike-discount.de/media/image/f6/81/cc/Northwave_Force-Trikot_89221022-40_-1_300x300.jpg',
      price: 24.99,
      rating: 4.7,
      discount: true,
      new: false
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
