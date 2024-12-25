import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {


  posts = [
    {
      user: {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'This is my first post!',
      image: 'https://via.placeholder.com/600x300'
    },
    {
      user: {
        name: 'Jane Smith',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Angular is awesome!',
      image: null // No image for this post
    },
    {
      user: {
        name: 'Emily Johnson',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Check out this cool photo!',
      image: 'https://via.placeholder.com/600x300'
    }
  ];
}
