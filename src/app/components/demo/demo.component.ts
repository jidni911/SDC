import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{

  constructor(private httpClient: HttpClient) { }
  messege = "no messege";
  ngOnInit(): void {
      let url = environment.apiUrl + "/auth/test";
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
