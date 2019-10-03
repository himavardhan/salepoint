import { FourthModule } from './../fourth/fourth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsprirtComponent } from './goodsprirt/goodsprirt.component';



@NgModule({
  declarations: [GoodsprirtComponent],
  imports: [
    CommonModule,
    FourthModule
  ],
  exports:[
    GoodsprirtComponent
  ]
})
export class ThridModule { }
