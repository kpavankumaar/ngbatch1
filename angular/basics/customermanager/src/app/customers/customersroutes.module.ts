import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/sharedmodule";



const custroutes:Routes = [
    {   path:'',
        component:CustomersComponent,
    }
]
@NgModule({
    declarations:[CustomersComponent,CustomersCardViewComponent,CustomersListViewComponent],
    imports:[CommonModule, SharedModule, RouterModule.forChild(custroutes)],
    exports:[RouterModule]
})
export class CustomersRouterModule{}