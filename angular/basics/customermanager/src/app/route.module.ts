import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersRouterModule } from "./customers/customersroutes.module";
import { OrdersRouterModule } from "./orders/ordersroutes.module";
import { PageNotFound } from "./pagenotfound.component";

const routes:Routes = [
    {path:'orders', loadChildren:'./orders/orders.module#OrdersModule'},
    {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
    {path:'', redirectTo:'customers', pathMatch:'full'},
    {path:'**',component:PageNotFound}
]
@NgModule({
    declarations:[PageNotFound],
    imports:[RouterModule.forRoot(routes),CustomersRouterModule,OrdersRouterModule],
    exports:[RouterModule]
})
export class RouteModule{}