import { Component } from "@angular/core";

@Component({
    selector:'app-customerscomponent',
    templateUrl:'customers.component.html'
})
export class CustomersComponent{
    obj = {
        name:'ravi'
    }
    age = 10;
    changeage(val){
        this.age = val;
    }
}