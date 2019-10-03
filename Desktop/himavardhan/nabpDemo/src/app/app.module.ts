import { ThridModule } from './thrid/thrid.module';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { SecondcomComponent } from './secondcom/secondcom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomComponent,
    SecondcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomerDashboardModule,
    ThridModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
