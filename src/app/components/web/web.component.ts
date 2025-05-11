import { Router } from '@angular/router';
import { AfterViewInit, Component, HostListener, Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';
import { BehaviorSubject } from 'rxjs';

interface Link {
  name: string;
  icon: string;
  url: string;
  active: boolean;
  color?: string;
}
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements AfterViewInit, OnInit {
  constructor(private router: Router, private usersService: UsersService,private webComponentService: WebComponentService) { }


  showNavValue: Boolean = false;
  ngOnInit(): void {
    this.webComponentService.showNav.subscribe(v => this.showNavValue = v);
  }









  navLinks = [
    { name: 'Home', icon: 'bi bi-house-door', url: '/home', active: true },
    { name: 'Messages', icon: 'bi bi-chat-left-dots', url: '/messges', active: true },
    { name: 'People', icon: 'bi bi-people', url: '/people', active: true },
    { name: 'Events', icon: 'bi bi-calendar2-event', url: '/events', active: true },
    { name: 'Shop', icon: 'bi bi-shop', url: '/shop', active: true },
    { name: 'Bike Messenger', icon: 'bi bi-bicycle', url: '/bikeMessenger', active: true },
    { name: 'Storage', icon: 'bi bi-sd-card', url: '/storage', active: true },
    { name: 'Dashboard', icon: 'bi bi-speedometer2', url: '/dashboard', active: true },
    { name: 'Demo', icon: 'bi bi-music-note-beamed', url: '/demo', active: true },
  ]




  getCurrentRoute() {
    return this.router.url;
  }
  user: User | null = null
  sign() {
    this.router.navigateByUrl('/auth');
  }

  isDev(): any {
    return Array.from(this.user?.roles || []).find((v: any) => v.name === "ROLE_DEV");
  }

  getUser() {
    // return AppComponent.getUser()
    return this.user
  }

  toggleTheme() {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'light');
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  }









  lastScrollTop = 0;
  navbar: HTMLElement | null = null;
  hideTimeout: any;

  ngAfterViewInit() {
    this.navbar = document.getElementById('mainNavbar');
    this.usersService.user.subscribe((res: User | null) => {
      this.user = res
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.navbar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add or remove 'scrolled' class
    if (scrollTop > 30) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }

    const delta = scrollTop - this.lastScrollTop;

    if (delta > 10) {
      // Fast Scroll Down
      this.navbar.classList.add('hide');
    } else if (delta < -10) {
      // Fast Scroll Up
      this.showNavbar();
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }


  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event']) // mobile touch support
  onMouseMove(event: MouseEvent | TouchEvent) {
    if (!this.navbar) return;

    let clientY = 0;
    if (event instanceof TouchEvent && event.touches.length > 0) {
      clientY = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      clientY = event.clientY;
    }

    if (clientY < 80) {
      this.showNavbar();
    }
  }

  private hideAfterDelay() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    this.hideTimeout = setTimeout(() => {
      this.navbar?.classList.add('hide');
    }, 500);
  }

  private showNavbar() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    this.navbar?.classList.remove('hide');
  }

}

@Injectable({
  providedIn: 'root'
})
export class WebComponentService {
  private showNavSource = new BehaviorSubject<Boolean>(true);
  showNav = this.showNavSource.asObservable();

  show() {
    this.showNavSource.next(true);
  }

  hide() {
    this.showNavSource.next(false);
  }

}
