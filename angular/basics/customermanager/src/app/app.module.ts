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
import { OrdersComponent } from './orders/orders.component';
import { CustomersModule } from './customers/customers.module';
import { PageNotFound } from './pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent, OrdersComponent, MenuComponent, PageNotFound
  ],
  imports: [
    BrowserModule,FormsModule,CustomersModule,CustomerModule, RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
