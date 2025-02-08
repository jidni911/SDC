import { environment } from 'src/environment';
import { FilesService } from './../../service/files.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  apiURL = environment.apiUrl;
  postText="";
  imageList: { id: number, url: string }[] = [];
  videoList: { id: number, url: string }[] = [];
  privacy = 'public'
  location = ''
  postTag = ''
  
  constructor(
    private postService: PostsService,
    private productService: ProductsService,
    private filesService: FilesService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {

  }
  // get mediaControls(): FormArray {
  //   return this.postForm.get('media') as FormArray;
  // }



  onSubmit() {
    // if (this.postForm.valid) {
    //   console.log(this.postForm.value);
    //   alert('Post submitted successfully!');
    // } else {
    //   alert('Please fill in all required fields.');
    // }
  }





  handleImageInput() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        this.filesService.uploadImage(file).subscribe(
          (response) => {
            setTimeout(() => {
              this.imageList.push({ id: response.id, url: response.url });
              fileInput.value = '';
            }, 1000);
          }
        );
      }

    }
  }

  handleVideoInput() {
    const fileInput = document.getElementById('video') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      this.filesService.uploadVideo(file).subscribe(
        (response) => {
          setTimeout(() => {
            this.videoList.push({ id: response.id, url: response.url });
            fileInput.value = '';
          }, 1000);
        }
      );
    }
  }




}
