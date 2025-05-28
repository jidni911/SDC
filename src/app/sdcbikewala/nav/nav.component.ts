import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menuItems = [
    {link: '/sdcbikewala/menu/parts', name: 'Parts'},
    {link: '/sdcbikewala/menu/accessories', name: 'Accessories'},
    {link: '/sdcbikewala/menu/clothing', name: 'Clothing'},
    {link: '/sdcbikewala/menu/training', name: 'Training & Leisure time'},
    {link: '/sdcbikewala/menu/electronics', name: 'Electronics'},
    {link: '/sdcbikewala/menu/sale', name: 'SALE'},
    {link: '/sdcbikewala/menu/newReleases', name: 'New Releases'},
  ];

}
