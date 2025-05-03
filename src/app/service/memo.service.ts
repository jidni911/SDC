import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  getMemo(memoId: any) {
    return this.http.get(this.api + '/' + memoId);
  }
  printMemo(memo:any) {
    return this.http.post(this.api + '/print', memo, { responseType: 'blob' });
  }
  executeMemo(memo: any) {
    return this.http.post(this.api + '/execute' , memo);
  }
  getAllMemo(page : number =0, size: number = 100) {
    return this.http.get(this.api+'?page='+page+'&size='+size);
  }
  saveMemo(memo: any) {
   
    return this.http.post(this.api , memo);
  }
  constructor(private http: HttpClient) { }
  api = environment.apiUrl + '/memo'

  nextMemoNumber() {
    return this.http.get(this.api + '/nextMemoNumber', { responseType: 'text' });
  }
  
}
