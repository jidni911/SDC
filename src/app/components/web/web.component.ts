import { Router } from '@angular/router';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements AfterViewInit {  


  constructor(private router: Router, private authService: AuthService, private usersService: UsersService) { }
  sign() {
    if (AppComponent.getUser()) {
      this.authService.logout().subscribe((v: any) => {
        console.log(v);
      });
      AppComponent.removeUser();
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }
  appComponent = AppComponent;

  isDev(): any {
    return AppComponent.getRoles()?.find((v: any) => v.name == "ROLE_DEV")
  }

  user:User | null = null
  getUser() {
    // return AppComponent.getUser()
    return this.user
  }

  toggleTheme(){
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
    this.usersService.getMySelf().subscribe((res: User) => {
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