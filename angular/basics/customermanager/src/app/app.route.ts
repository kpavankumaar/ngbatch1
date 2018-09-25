import { CustomersComponent } from "./customers/customers.component";
import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { OrdersComponent } from "./orders/orders.component";

export const routes:Routes = [
    {path:'customers', component: CustomersComponent},
    {path:'orders', component: OrdersComponent},
    {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
]