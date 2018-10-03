import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


const custroutes = [
    {   path:'',
        component:CustomersComponent,
    }
]
@NgModule({
    declarations:[CustomersComponent,CustomersCardViewComponent,CustomersListViewComponent],
    imports:[RouterModule.forChild(custroutes)],
    exports:[RouterModule]
})
export class CustomersRouterModule{}