import { environment } from 'src/environment';
import { FilesService } from './../../service/files.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  apiURL = environment.apiUrl;
  postText = "";
  imageList: { id: number, url: string }[] = [];
  videoList: { id: number, url: string }[] = [];
  productList: any[] = [];
  privacy = 'public'
  location = ''
  postTag = ''


  productSuggestionnList: any[] = [];

  constructor(
    private postService: PostsService,
    private productService: ProductsService,
    private filesService: FilesService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {

  }
  // get mediaControls(): FormArray {
  //   return this.postForm.get('media') as FormArray;
  // }



  onSubmit() {
    let formGroup : FormGroup = new FormGroup({
      postText: new FormControl(this.postText),
      location: new FormControl(this.location),
      isPublic: new FormControl(this.privacy == 'public'),
      sharedPostId: new FormControl(this.postTag),
      postImage: new FormControl(this.imageList.map( v => v.id)),
      postVideo: new FormControl(this.videoList.map( v => v.id)),
      products: new FormControl(this.productList.map( v => v.id)),
    })

    this.postService.createPost(formGroup.value).subscribe((response) => {
      console.log('Post created successfully', response);
      this.ngOnInit();
    });
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


  handleProductInput($event: Event) {
    const productInput = $event.target as HTMLInputElement;
    let productText = productInput.value;
    if (productText == '') {
      this.productSuggestionnList = [];
      return;
    }
    this.productService.searchProducts(productText).subscribe((res: any) => {
      this.productSuggestionnList = res.content
      console.log(this.productSuggestionnList);

    })
  }

  addProductToList(product:any){
    this.productList.push(product)
    const input = document.getElementById('productInput') as HTMLInputElement;
    input.value = '';
    this.productSuggestionnList = []
    
  }
}
