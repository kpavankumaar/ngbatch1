import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistview.component";

export const custroutes = [
    {path:'',component:CustomersComponent},
    {path:'cardview',component:CustomersCardViewComponent},
    {path:'listview',component:CustomersListViewComponent}
]