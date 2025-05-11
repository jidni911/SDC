import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';
import { TimeLeftPipe } from '../pipes/time-left.pipe';
import { ReplaceSpacePipe } from '../pipes/replace-space.pipe';



@NgModule({
  declarations: [
    TimeAgoPipe,
    TimeLeftPipe,
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe,
    TimeLeftPipe,
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
