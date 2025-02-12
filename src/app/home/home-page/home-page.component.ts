import { CommentService } from './../../service/comment.service';
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
    private commentService: CommentService
  ) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((r: any) => {
      let r1: any[] = r.content;
      this.posts = r1;
    })
  }

  user: any = AppComponent.getUser()
  posts: any[] = [];
  products: any[] = []

  getProductById(id: string) {
    return this.products.filter((v) => v.id == id)[0]
  }

  addComment(postId: any) {
    let input = document.getElementById('comment'+postId) as HTMLInputElement;
    if (input.value) {
      let comment = {
        commentText: input.value,
        imageIds: [],
        videoIds: [],
        parentId: null,
        postId: postId
      }
      this.commentService.addComment(comment).subscribe((r: any) => {
        this.posts.filter((v) => v.id == postId)[0].comments.push(r);
        input.value = '';
      })
    }
  }
  addCommentReply(commentId: any) {
    let input = document.getElementById('commentReply'+commentId) as HTMLInputElement;
    if (input.value) {
      let comment = {
        commentText: input.value,
        imageIds: [],
        videoIds: [],
        parentId: commentId,
        postId: null
      }
      this.commentService.addComment(comment).subscribe((r: any) => {
        outerLoop:
        for (let v of this.posts) {
          for (let c of v.comments) {
            if (c.id == commentId) {
              c.replies.push(r);
              break outerLoop;
            }
          }
        }
        input.value = '';
      })
    }
  }
  likePost(postId: any) {
    this.postService.likePost(postId).subscribe((r: any) => {
      this.posts.filter((v) => v.id == postId)[0].likers = r.likers
    })
  }

  sharePsot(postId: any){
    //TODO no server, navigate to create post
  }
}
