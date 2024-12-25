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
      this.router.navigateByUrl('/signin');
    } else {
      this.bugForm.patchValue({ submittedBy: AppComponent.getUser().id })
      this.bugService.getBugs().subscribe((v: any) => {
        this.bugs = v;
      })
    }
  }
  constructor(private router: Router, private bugService: BugService) { }
  bugForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    severity: new FormControl(),
    steps: new FormControl(),
    isSolved: new FormControl(false),
    submittedBy: new FormControl()
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
}
