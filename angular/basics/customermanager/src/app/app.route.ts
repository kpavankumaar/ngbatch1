import { CustomersComponent } from "./customers/customers.component";
import { Routes } from "@angular/router";
import { CustomersListViewComponent } from "./customers/customerslistview.component";
import { CustomerComponent } from "./customer/customer.component";

export const routes:Routes = [
    {path:'customers', component: CustomersComponent},
    {path:'listview', component: CustomersListViewComponent},
    {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
]