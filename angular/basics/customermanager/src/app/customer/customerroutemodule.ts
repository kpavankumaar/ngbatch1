import { CustomerComponent } from "./customer.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const customerRoutes:Routes =[
    {
        path:'',
        component:CustomerComponent
    }
    
]
@NgModule({
    imports:[RouterModule.forChild(customerRoutes)],
    exports:[RouterModule]
})
export class CustomerRoutesModule{

}