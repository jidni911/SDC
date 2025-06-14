import { FilesService } from 'src/app/service/files.service';
import { JerseyService } from './../services/jersey.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  user: User | null = null
  apiUrl = environment.apiUrl
  constructor(
    private jerseyService: JerseyService, 
    private filesService: FilesService, 
    private router: Router,
    private usersService: UsersService
  ) { }
  ngOnInit(): void {
    this.usersService.user.subscribe((res: User | null) => {
      this.user = res
    })
  }
  images: { id: number, url: string }[] = []

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    halfSleevePrice: new FormControl(0),
    fullSleevePrice: new FormControl(0),
    babyHalfSleevePrice: new FormControl(0),
    babyFullSleevePrice: new FormControl(0),
    customHalfSleevePrice: new FormControl(0),
    customFullSleevePrice: new FormControl(0)
  });

  isAdmin() {
    return Array.from(this.user?.roles || []).find((v: any) => v.name == 'ROLE_ADMIN');
  }
  handleFileInput($event: Event) {
    const input = $event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.filesService.uploadImage(file).subscribe((v: any) => {
        this.images.push(v);
      })
    }
  }
  onSubmit() {
    let jerseyData = { ...this.form.value, imageIds: this.images.map(v => v.id) }
    this.jerseyService.addJersey(jerseyData).subscribe((v: any) => {
      if (v == null) {
        this.form.reset();
        this.images = [];
        this.router.navigate(['/merchandise']);
      } else {
        alert('Some thing went wrong! Contact the developer!')
      }

    })
  }

}
