import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


export const custroutes = [
    {
        path:'customers',
        component:CustomersComponent,
        children:[
            {path:'cardview',component:CustomersCardViewComponent},
            {path:'listview',component:CustomersListViewComponent}
        ]
    },
    
    
]
@NgModule({
    imports:[RouterModule.forChild(custroutes)],
    exports:[RouterModule]
})
export class CustomersRouterModule{}