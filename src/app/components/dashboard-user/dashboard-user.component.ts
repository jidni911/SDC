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
      image: 'https://via.placeholder.com/600x300',
      relatedProducts: ['abc', 'ijk', 'xyz']
    },
    {
      user: {
        name: 'Jane Smith',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Angular is awesome!',
      image: null, // No image for this post
      relatedProducts: ['abc', 'ijk', 'xyz']
    },
    {
      user: {
        name: 'Emily Johnson',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Check out this cool photo!',
      image: 'https://via.placeholder.com/600x300',
      relatedProducts: []
    },
    {
      user: {
        name: 'Michael Brown',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Loving the new Angular 16 features! 🚀',
      image: 'https://via.placeholder.com/600x400',
      relatedProducts: ['123', '456', '789']
    },
    {
      user: {
        name: 'Sarah Connor',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Just a simple post with no image or products.',
      image: null,
      relatedProducts: []
    },
    {
      user: {
        name: 'Tom Hardy',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Here’s a shot from my recent trip! 🌄',
      image: 'https://via.placeholder.com/600x300',
      relatedProducts: ['lmn', 'opq', 'rst']
    },
    {
      user: {
        name: 'Anna Kendrick',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'Happy to announce my new project! 🎉',
      image: 'https://via.placeholder.com/600x350',
      relatedProducts: ['uvw', 'xyz']
    },
    {
      user: {
        name: 'Robert Downey Jr.',
        profilePicture: 'https://via.placeholder.com/50'
      },
      content: 'A throwback to the good old days!',
      image: null,
      relatedProducts: ['iron', 'man', 'suit']
    }
  ];


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
