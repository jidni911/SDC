import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{

  constructor(private httpClient: HttpClient) { }
  messege = "no messege";
  ngOnInit(): void {
      let url = "http://localhost:3000/auth/test";
      this.httpClient.get(url).subscribe({
        next: (v: any) => {
          this.messege =JSON.stringify(v);
        },
        error: (e) => {
          this.messege = JSON.stringify(e);
        }
      })
  }
}
