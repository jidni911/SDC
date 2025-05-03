import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { MemoService } from 'src/app/service/memo.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-all-memo',
  templateUrl: './all-memo.component.html',
  styleUrls: ['./all-memo.component.scss']
})
export class AllMemoComponent implements OnInit {
  page: any
  allMemo: any[] = []
  apiUrl = environment.apiUrl
  selectedMemo: any
  constructor(private memoService: MemoService) { }
  ngOnInit(): void {
    this.loadMemos(0);
  }


  clicked(memo: any) {
    this.selectedMemo = memo;
    console.log(memo);
    
    let modal  =  document.getElementById('modalId')
    if (modal) {
      // Show the modal using Bootstrap's modal method
      const bootstrapModal = new bootstrap.Modal(modal);  
      bootstrapModal.show();
    }

  }
  onPageChange(pageNumber: number): void {
    this.loadMemos(pageNumber);
  }
  loadMemos(pageNumber: number): void {
    this.memoService.getAllMemo(pageNumber).subscribe((r: any) => {
      this.page = r;
      this.allMemo = this.page.content;      
    })
  }


}
