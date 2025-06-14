import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempFileRoutingModule } from './temp-file-routing.module';
import { RootComponent } from './root/root.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    TempFileRoutingModule,
    FormsModule,
    
    
  ]
})
export class TempFileModule { }
