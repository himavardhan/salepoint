import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressliqComponent } from './expressliq/expressliq.component';



@NgModule({
  declarations: [ExpressliqComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ExpressliqComponent
  ]
})
export class FourthModule { }
