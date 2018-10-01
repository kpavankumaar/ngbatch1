import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { custroutes, CustomersRouterModule } from "./customersroutes.module";


@NgModule({
    declarations:[CustomersComponent,CustomersCardViewComponent,CustomersListViewComponent],
    imports:[CommonModule,CustomersRouterModule]
})
export class CustomersModule{

}