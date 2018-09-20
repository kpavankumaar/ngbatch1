import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule],
    declarations:[CustomerComponent],
    exports:[CustomerComponent]
})
export class CustomerModule {

}