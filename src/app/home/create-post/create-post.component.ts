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
  
  postForm: FormGroup;
  constructor(
    private postService: PostsService,
    private productService: ProductsService,
    private filesService: FilesService,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      postText: ['', Validators.required],
      media: this.fb.array([]),
      privacy: ['public', Validators.required],
      location: [''],
      isPoll: [false],
    });
  }
  ngOnInit(): void {

  }
  get mediaControls(): FormArray {
    return this.postForm.get('media') as FormArray;
  }

  addMedia() {
    this.mediaControls.push(
      this.fb.group({
        mediaType: ['image', Validators.required],
        url: ['', Validators.required],
      })
    );
  }

  removeMedia(index: number) {
    this.mediaControls.removeAt(index);
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      alert('Post submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }


  imageList: { id: number, url: string }[] = [];

  // handleFileInput() {
  //   const inputElement = document.getElementById('image') as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     this.selectedFile = inputElement.files[0];
  //     this.uploadImage();
  //   }
  // }

  handleFileInput() {
    const fileInput =document.getElementById('image') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
  
      this.filesService.uploadImage(file).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
          console.log('Image ID:', response.id);
          console.log('Image URL:', response.url);
  
          this.imageList.push({ id: response.id, url: response.url });
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
  

  

}
