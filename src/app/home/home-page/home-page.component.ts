import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PostsService } from 'src/app/service/posts.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private postService: PostsService,
     private productService: ProductsService,
    ) {  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((s:any)=>{
      this.products = s;
      this.postService.getPosts().subscribe((r:any) => {
        let r1 : any[] =r;
        this.posts = r1;
      })
    })
  }

  user : any = AppComponent.getUser()
  posts: any[] = [];
  products:any[] = []

  getProductById(id: string) {
    return this.products.filter((v)=>v.id==id)[0]
  }

}
