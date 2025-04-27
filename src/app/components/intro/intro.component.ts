import { Router } from '@angular/router';
import { HomeServiceService } from './../../service/home-service.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';


declare var bootstrap: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  apiUrl = environment.apiUrl;

  constructor(private homeServiceService: HomeServiceService, private router: Router) { }
  ngOnInit(): void {
    this.homeServiceService.getHome().subscribe((r: any) => {
      this.home = r;
      if (r.welcomeImage && r.welcomeImage.url) {
        this.previewUrl = environment.apiUrl + r.welcomeImage.url; // Adjust your backend base URL if needed
      }
    })
  }
  home: any = null;
  previewUrl: string | ArrayBuffer | null = null;
  welcomeText = 'Looking for Server...';
  bg1 = 'assets/photo/image1.png';
  sdcbijoyjersey25 = 'assets/photo/sdcbijoyjersey25.png';
  sdcbijoyjersey21 = 'assets/photo/sdcbijoyjersey21.png';
  sdcofficialjersey23 = 'assets/photo/sdcofficialjersey23.png';
  // savegazaevent = 'assets/photo/savegazaevent.png';
  barishalride = 'assets/photo/barishalride.png';
  sdcmeetingpoint = 'assets/photo/sdcmeetingpoint.png';
  sreemangalride = 'assets/photo/sreemangalride.png';
  text() {
    this.router.navigate(['products/productDetails/52']);
  }
  merchandiseList = [
    {
      imgSrc: this.sdcbijoyjersey25,
      alt: 'SDC Bijoy Jersey 2025',
      title: 'SDC বিজয় জার্সি ২০২৫',
      description: 'Celebrate Victory Day with our exclusive 2025 jersey.',
      buttonText: 'Get Now',
      buttonLink: '#'
    },
    {
      imgSrc: this.sdcbijoyjersey21,
      alt: 'SDC Bijoy Jersey 2021',
      title: 'SDC বিজয় জার্সি ২০২১',
      description: 'Limited stock left! Grab your 2021 Victory jersey.',
      buttonText: 'Shop Now',
      buttonLink: '#'
    },
    {
      imgSrc: this.sdcofficialjersey23,
      alt: 'SDC Official Jersey 2023',
      title: 'SDC অফিসিয়াল জার্সি ২০২৩',
      description: 'Our 2023 official team jersey — ride with pride!',
      buttonText: 'Buy Now',
      buttonLink: '#'
    }
  ];

  sponsors = [
    {
      logo: 'assets/logo/logo2.png',
      name: 'SDCBikewala',
      description: 'Providing discounts and support for our members, and partnering with us to promote cycling in our community.'
    }
    // You can easily add more sponsors later:
    // {
    //   logo: 'assets/logo/anotherlogo.png',
    //   name: 'New Sponsor',
    //   description: 'Supporting our community rides and cycling programs.'
    // }
  ];
 
  
  selectedImage: { src: string, alt: string } | null = null;

  galleryPhotos = [
    { src: this.bg1, alt: 'Event 1' },
    { src:this.barishalride, alt: 'Event 2' },
    { src: this.sdcmeetingpoint, alt: 'Event 3' },
    // you can add more real images here
  ];

  openImage(photo: { src: string, alt: string }) {
    this.selectedImage = photo;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
  
}
