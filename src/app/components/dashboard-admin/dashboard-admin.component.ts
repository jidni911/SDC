import { HomeServiceService } from './../../service/home-service.service';
import { UsersService } from 'src/app/service/users.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  constructor(private usersService: UsersService,private homeService: HomeServiceService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((r: any) => {
      this.users = r;
    })
    this.homeService.getHome().subscribe((r:any)=>{
      console.log(r);
      
      this.home = r;
      // this.welcomeText = r.welcomeText;
      if (r.welcomeImage && r.welcomeImage.url) {
        this.previewUrl = environment.apiUrl + r.welcomeImage.url; // Adjust your backend base URL if needed
      }
    })
  }
  apiUrl = environment.apiUrl;
  home:any= null;
  welcomeImage:any = null;
  newSpecialId:any = null;
  newSpecialTitle: any = null;
  newSpecialDescription: any = null;
  newSpecialImages: any[] = [];
  users: any[] = []

  
  previewUrl: string | ArrayBuffer | null = null;
  newSpecialImagesPreviewUrls: any[] = [];
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.welcomeImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFilesSelected(event: Event) {
    const files = (event.target as HTMLInputElement)?.files;
    if (files) {
      this.newSpecialImages = Array.from(files);
      this.newSpecialImagesPreviewUrls = [];
      for (const file of this.newSpecialImages) {
        const reader = new FileReader();
        reader.onload = () => {
          this.newSpecialImagesPreviewUrls.push(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  addSpecial() {
    const formData = new FormData();
    if(this.newSpecialId)formData.append('id', this.newSpecialId);
    formData.append('title', this.newSpecialTitle);
    formData.append('description', this.newSpecialDescription);
    for (const file of this.newSpecialImages) {
      formData.append('images', file);
    }
  
    this.homeService.addSpecial(formData).subscribe({
      next: (res) => console.log('Upload success', res),
      error: (err) => console.error('Upload error', err),
    });
  }

 
  onSubmit() {
    const formData = new FormData();
    formData.append('welcomeText', this.home.welcomeText);
    formData.append('welcomeImage', this.welcomeImage);
  
    this.homeService.updateHome(formData).subscribe({
      next: (res) => console.log('Upload success', res),
      error: (err) => console.error('Upload error', err),
    });
  }

}
//TODO intro page controlling, post deletation, user deletation