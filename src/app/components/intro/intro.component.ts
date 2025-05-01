import { Router } from '@angular/router';
import { HomeServiceService } from './../../service/home-service.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';
import { trigger, style, animate, transition } from '@angular/animations';


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
        this.previewUrl = environment.apiUrl + r.welcomeImage.url;
      }
    }, (err: any) => {
      console.log(err);
      this.welcomeText = 'Server in under maintenance. <br> retrying in 30 seconds...';
      setTimeout(() => {
        window.location.reload();
      }, 30000);
    })

    let toggleBtn = document.getElementById('toggleScrollSpy');
   let drawer = document.getElementById('scrollSpyDrawer');

  toggleBtn!.addEventListener('click', () => {
    drawer!.classList.toggle('hidden');
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
  // sreemangalride = 'assets/photo/sreemangalride.png';
  text() {
    this.router.navigate(['merchandise']);
  }
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

  sponsors = [
    {
      logo: 'assets/logo/sdcbikewalalogo.png',
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
    { src: this.bg1, alt: 'Event 1' },
    { src:this.barishalride, alt: 'Event 2' },
    { src: this.sdcmeetingpoint, alt: 'Event 3' },
    { src: this.bg1, alt: 'Event 1' },
    { src:this.barishalride, alt: 'Event 2' },
    { src: this.sdcmeetingpoint, alt: 'Event 3' },
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

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('fade-in');
    img.classList.remove('opacity-0');
  }


  teamMembers = [
    {
      name: 'Md. Salman Rahman',
      role: 'Admin',
      tagline: 'Founder & passionate cyclist leading the way.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://facebook.com', icon: 'bi bi-facebook' },
        { link: 'https://instagram.com', icon: 'bi bi-instagram' }
      ]
    },
    {
      name: 'Farhana Sultana',
      role: 'Moderator',
      tagline: 'Building a stronger cycling community.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://twitter.com', icon: 'bi bi-twitter' }
      ]
    },
    {
      name: 'Ahmed Karim',
      role: 'Volunteer',
      tagline: 'Making every ride smoother and safer!',
      photo: 'assets/logo/logo2.png',
      socials: []
    },
    {
      name: 'Md. Salman Rahman',
      role: 'Admin',
      tagline: 'Founder & passionate cyclist leading the way.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://facebook.com', icon: 'bi bi-facebook' },
        { link: 'https://instagram.com', icon: 'bi bi-instagram' }
      ]
    },
    {
      name: 'Farhana Sultana',
      role: 'Moderator',
      tagline: 'Building a stronger cycling community.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://twitter.com', icon: 'bi bi-twitter' }
      ]
    },
    {
      name: 'Ahmed Karim',
      role: 'Volunteer',
      tagline: 'Making every ride smoother and safer!',
      photo: 'assets/logo/logo2.png',
      socials: []
    },
    {
      name: 'Md. Salman Rahman',
      role: 'Admin',
      tagline: 'Founder & passionate cyclist leading the way.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://facebook.com', icon: 'bi bi-facebook' },
        { link: 'https://instagram.com', icon: 'bi bi-instagram' }
      ]
    },
    {
      name: 'Farhana Sultana',
      role: 'Moderator',
      tagline: 'Building a stronger cycling community.',
      photo: 'assets/logo/logo2.png',
      socials: [
        { link: 'https://twitter.com', icon: 'bi bi-twitter' }
      ]
    },
    {
      name: 'Ahmed Karim',
      role: 'Volunteer',
      tagline: 'Making every ride smoother and safer!',
      photo: 'assets/logo/logo2.png',
      socials: []
    },
  ];
  animations = [
    trigger('fadeInUpAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ];
  

  testimonials = [
    {
      image: 'assets/logo/logo2.png',
      name: 'John Doe',
      testimonial: 'Joining South Dhaka Cyclists has been a life-changing experience. I\'ve met wonderful people and become a more confident cyclist.'
    },
    {
      image: 'assets/logo/logo2.png',
      name: 'Jane Smith',
      testimonial: 'I love the sense of community and support that South Dhaka Cyclists provides. The workshops have helped me improve my skills.'
    },
    {
      image: 'assets/logo/logo2.png',
      name: 'Ahmed Khan',
      testimonial: 'South Dhaka Cyclists has made a huge difference in my life. I\'ve become more active and made many new friends.'
    }
  ];


   
  
}
