import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PostsService } from 'src/app/service/posts.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  apiUrl = environment.apiUrl
  constructor(
    private postService: PostsService,
    ) {  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((r:any) => {
      let r1 : any[] =r.content;
      // console.log(r1);
      this.posts = r1;
    })
  }

  user : any = AppComponent.getUser()
  posts: any[] = [];
  products:any[] = []

  getProductById(id: string) {
    return this.products.filter((v)=>v.id==id)[0]
  }

}
