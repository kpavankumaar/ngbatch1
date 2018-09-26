import { CustomersComponent } from "./customers/customers.component";
import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { OrdersComponent } from "./orders/orders.component";
import { PageNotFound } from "./pagenotfound.component";

export const routes:Routes = [
    {path:'', redirectTo:'customers', pathMatch:'full'},
    {path:'orders', component: OrdersComponent},
    {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
    {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
    {path:'**',component:PageNotFound}
]