import { Router } from '@angular/router';
import { HomeServiceService } from './../../service/home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {


  constructor( private homeServiceService: HomeServiceService, private router: Router) { }
  ngOnInit(): void {
    this.homeServiceService.getHome().subscribe((r: any) => {
      this.home = r;
    })
  }
  home:any = null;
  welcomeText = 'Looking for Server...';
 bg1 = 'assets/photo/image1.png';
 sdcbijoyjersey25 = 'assets/photo/sdcbijoyjersey25.png';
 sdcbijoyjersey21 = 'assets/photo/sdcbijoyjersey21.png';
 sdcofficialjersey23 = 'assets/photo/sdcofficialjersey23.png';
 savegazaevent = 'assets/photo/savegazaevent.png';
 barishalride = 'assets/photo/barishalride.png'; 
 sdcmeetingpoint = 'assets/photo/sdcmeetingpoint.png';
 sreemangalride = 'assets/photo/sreemangalride.png';
 text() {
  this.router.navigate(['products/productDetails/52']);
  
  }
}
