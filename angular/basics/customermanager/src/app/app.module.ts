import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CustomersComponent} from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { routes } from './app.route';
import { CustomersListViewComponent } from './customers/customerslistview.component';
import { CustomerModule } from './customer/customer.module';
import { MenuComponent } from './core/menu.component';
import { bootstrap } from '../../node_modules/bootstrap';
@NgModule({
  declarations: [
    AppComponent,CustomersComponent, CustomersListViewComponent, MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,CustomerModule, RouterModule.forRoot(routes),bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
