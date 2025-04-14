import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BugService } from 'src/app/service/bug.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss']
})
export class BugReportComponent implements OnInit {
  ngOnInit(): void {
    if (!AppComponent.getUser()) {
      this.bugForm.patchValue({ submittedBy: null })
      this.bugService.getBugs().subscribe((v: any) => {
        console.log(v);
        
        this.bugs = v.content;
      })
    } else {
      this.bugForm.patchValue({ submittedBy: AppComponent.getUser().id })
      this.bugService.getBugs().subscribe((v: any) => {
        
        this.bugs = v.content;
      })
    }
  }
  constructor(private router: Router, private bugService: BugService) { }
  isDeveloper(){
    
    return AppComponent.getRoles().find((v : any) => v.name == 'ROLE_DEV')
  }
  bugForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    severity: new FormControl(),
    steps: new FormControl(),
    isSolved: new FormControl(false)
  })

  onSubmit() {
    if (this.bugForm.valid) {
      this.bugService.createBug(this.bugForm.value).subscribe(response => {
        console.log('Bug report submitted successfully', response);
        this.showBugs = true;
        this.ngOnInit();
      }, error => {
        console.error('Error submitting bug report', error);
      });
    } else {
      console.error('Bug report form is invalid');
    }
  }

  showBugs = false;
  bugs: any[] = [];
  selectedBug : any = {
    id: "d4b5",
    title: "Role Selection",
    description: "When role is modified, it doesnt change",
    severity: "medium",
    steps: "Click on the nav bar",
    isSolved: false
  }
  load(bug:any){
    this.selectedBug = bug;
  }
  solve(bug:any){
    bug.isSolved = true;
    // console.log(bug);

    this.bugService.updateBug(bug.id,bug).subscribe((r)=>{
      console.log(r);

      this.ngOnInit()
    })
  }
  delete(bug:any){
    this.bugService.deleteBug(bug.id).subscribe((r:any)=>{
      this.ngOnInit()
    })
  }
}
