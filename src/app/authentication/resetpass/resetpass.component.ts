import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent implements OnInit {
  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router) { }
  username: any;
  response: any = '';
  showErrorMessage = false;
  resetConfirmation = {
    username: '',
    otp: '',
    password: '',
    retypePassword: ''
  }
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if(this.username){
      this.authService.forgotPassword(this.username).subscribe((r: any) => {
        this.response = r;
      });
    }
  }
  resetPassword() {
    this.resetConfirmation.username = this.username;
    console.log(this.resetConfirmation);
    
    this.authService.resetPassword(this.resetConfirmation).subscribe((r: any) => {
      // this.response = r;
      if(r==true){
        this.router.navigate(['/auth']);
      } else {
        this.showErrorMessage = true;
      }
    });
  }

}
