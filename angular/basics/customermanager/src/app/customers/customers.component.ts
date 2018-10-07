import { Component, OnInit } from '@angular/core';
import { Service } from '../core/service/service'

@Component({
    selector:'app-customerscomponent',
    templateUrl:'customers.component.html',
})
export class CustomersComponent implements OnInit{
    datacontent;
    pageno;
    paginationnum = [1, 2, 3];
    constructor(public data:Service){
        
    }
    ngOnInit(){
        let selfthis = this;
        this.data.getInfo().subscribe(function(dataInfo){
            console.log(dataInfo);
            selfthis.datacontent = dataInfo;
            console.log('inside subscribe method', this.datacontent);
        })
        setTimeout(()=>{console.log('setTimeout',this.datacontent)},1000);

        
        // console.log(this.datacontent);
    }
    onpaginationclick(val){
        console.log('customers component value recieved from pagination event trigger', val)
    }
  
    age = 10;
    changeage(val){
        this.age = val;
    }
}