import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {
  constructor(private postService: PostsService, private productService: ProductsService) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((r: any) => {
      this.posts = r;
    })
  }


  posts: any = [];


  //   async getProductById(id: string): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //         this.productService.getProduct(id).subscribe(
  //             (response: any) => {
  //                 // Handle the response here
  //                 console.log(response);
  //                 resolve(response);
  //             },
  //             (error: any) => {
  //                 // Handle the error here
  //                 console.error(error);
  //                 reject(error);
  //             }
  //         );
  //     });
  // }

  getProductById(id: string) {
    const productDatabase: { [key: string]: { imageLinks: string[] } } = {
      abc: { imageLinks: ['https://via.placeholder.com/90x90', 'https://via.placeholder.com/120x120'] },
      ijk: { imageLinks: ['https://via.placeholder.com/90x90'] },
      xyz: { imageLinks: ['https://via.placeholder.com/90x90'] },
      "123": { imageLinks: ['https://via.placeholder.com/90x90', 'https://via.placeholder.com/110x110'] },
      "456": { imageLinks: ['https://via.placeholder.com/90x90'] },
      lmn: { imageLinks: ['https://via.placeholder.com/90x90'] },
      opq: { imageLinks: ['https://via.placeholder.com/90x90'] },
      rst: { imageLinks: ['https://via.placeholder.com/90x90'] },
      uvw: { imageLinks: ['https://via.placeholder.com/90x90'] },
      iron: { imageLinks: ['https://via.placeholder.com/90x90'] },
      man: { imageLinks: ['https://via.placeholder.com/90x90'] },
      suit: { imageLinks: ['https://via.placeholder.com/90x90'] }
    };

    // Normalize the id: trim spaces and convert to lowercase if needed
    const normalizedId = id.trim();

    // Return the corresponding product or a default object
    return productDatabase[normalizedId] || { imageLinks: ['https://via.placeholder.com/90x90'] };
  }


}
