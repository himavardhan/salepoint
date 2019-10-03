import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashnoardComponent } from './customer-dashnoard/customer-dashnoard.component';



@NgModule({
  declarations: [CustomerDashnoardComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomerDashnoardComponent
  ]
})
export class CustomerDashboardModule { }
