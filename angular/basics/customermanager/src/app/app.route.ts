import { CustomersComponent } from "./customers/customers.component";
import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { OrdersComponent } from "./orders/orders.component";
import { PageNotFound } from "./pagenotfound.component";

export const routes:Routes = [
    
    {path:'orders', component: OrdersComponent},
    {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
    {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
    {path:'', redirectTo:'customers', pathMatch:'full'},
    {path:'**',component:PageNotFound}
]