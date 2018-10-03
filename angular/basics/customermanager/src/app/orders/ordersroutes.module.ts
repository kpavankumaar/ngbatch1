import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders.component";


const orderroutes = [
    {
        path:'orders',
        component:OrdersComponent,
    },
    
    
]
@NgModule({
    declarations:[OrdersComponent],
    imports:[RouterModule.forChild(orderroutes)],
    exports:[RouterModule]
})
export class OrdersRouterModule{}