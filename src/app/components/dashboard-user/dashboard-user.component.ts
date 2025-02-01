import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { PostsService } from 'src/app/service/posts.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private postService: PostsService,
     private productService: ProductsService,
     private fb : FormBuilder
    ) {
    this.postForm = this.fb.group({
      content: ['', Validators.required],
      media: this.fb.array([]),
      privacy: ['public', Validators.required],
      location: [''],
      isPoll: [false],
    });
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((s:any)=>{
      this.products = s;
      this.postService.getPosts().subscribe((r: any) => {
        this.posts = r;
      })
    })
  }

  user : any = AppComponent.getUser()
  posts: any[] = [];
  products:any[] = []

  getProductById(id: string) {
    return this.products.filter((v)=>v.id==id)[0]
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

}
