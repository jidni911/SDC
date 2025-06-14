import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { TempServiceService } from 'src/app/service/temp-service.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  apiUrl = environment.apiUrl

  files: TempFile[] = [];

  searchText = '';
  regularPage = 1;
  importantPage = 1;
  pageSize = 5;

  password: string = '';
  actionTargetFile: TempFile | null = null;
  actionType: 'delete' | 'important' | 'unimportant' | null = null;

  constructor(private tempService: TempServiceService) {
    this.loadFiles();
  }

  // Load from API
  loadFiles() {
    this.tempService.getAllFiles().subscribe((data:any) => {
      this.files = data;
    });
  }

  // Drag-and-Drop
  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) this.upload(file,event.target);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.upload(file,event.target);
  }

  upload(file: File, target: any) {
    this.tempService.uploadFile(file).subscribe(event => {
      // console.log(event);
      
      if (event.type === HttpEventType.Response) {
        console.log('Upload complete');
        target.value = '';
        this.loadFiles();
      }
    });
  }

  // Password Modal Trigger
  deleteFile(file: TempFile) {
    this.openPasswordModal(file, 'delete');
  }

  makeImportant(file: TempFile) {
    this.openPasswordModal(file, 'important');
  }

  makeUnimportant(file: TempFile) {
    this.openPasswordModal(file, 'unimportant');
  }

  // Password Modal Logic
  openPasswordModal(file: TempFile, action: 'delete' | 'important' | 'unimportant') {
    this.password = '';
    this.actionTargetFile = file;
    this.actionType = action;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('passwordModal'));
    modal.show();
  }

  onPasswordSubmit() {
    if (!this.actionTargetFile || !this.actionType) return;
    this.tempService.verifyPassword(this.password).subscribe(res => {
      if (res.verified) {
        switch (this.actionType) {
          case 'delete':
            this.tempService.deleteFile(this.actionTargetFile!.name).subscribe(() => this.loadFiles());
            break;
          case 'important':
            this.tempService.markImportant(this.actionTargetFile!.name).subscribe(() => this.loadFiles());
            break;
          case 'unimportant':
            this.tempService.markUnimportant(this.actionTargetFile!.name).subscribe(() => this.loadFiles());
            break;
        }
        (window as any).bootstrap.Modal.getInstance(document.getElementById('passwordModal'))?.hide();
      } else {
        alert('Invalid password');
      }
    });
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(this.apiUrl + url);
  }

  // Pagination + Search
  get filteredFiles() {
    return this.files.filter(file =>
      file.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get regularFiles() {
    return this.filteredFiles.filter(f => !f.important);
  }

  get importantFiles() {
    return this.filteredFiles.filter(f => f.important);
  }

  paginatedRegularFiles() {
    const start = (this.regularPage - 1) * this.pageSize;
    return this.regularFiles.slice(start, start + this.pageSize);
  }

  paginatedImportantFiles() {
    const start = (this.importantPage - 1) * this.pageSize;
    return this.importantFiles.slice(start, start + this.pageSize);
  }

  nextPage(type: 'regular' | 'important') {
    if (type === 'regular' && this.hasMoreRegular()) this.regularPage++;
    if (type === 'important' && this.hasMoreImportant()) this.importantPage++;
  }

  prevPage(type: 'regular' | 'important') {
    if (type === 'regular' && this.regularPage > 1) this.regularPage--;
    if (type === 'important' && this.importantPage > 1) this.importantPage--;
  }

  hasMoreRegular() {
    return this.regularPage * this.pageSize < this.regularFiles.length;
  }

  hasMoreImportant() {
    return this.importantPage * this.pageSize < this.importantFiles.length;
  }
}

interface TempFile {
  name: string;
  size: number;
  url: string;
  type: string;
  important: boolean;
  createdAt: Date;
  selected?: boolean;
}
