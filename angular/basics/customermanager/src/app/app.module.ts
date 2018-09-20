import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CustomersComponent} from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
// import { routes } from './app.route';
import { CustomersListViewComponent } from './customers/customerslistview.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,CustomersComponent, CustomersListViewComponent
  ],
  imports: [
    BrowserModule,FormsModule,CustomerModule//, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
