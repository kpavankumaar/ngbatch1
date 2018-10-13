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
    cardviewflag:boolean = true;
    listviewflag:boolean = false;
    constructor(public data:Service){
        
    }
    updateview(val){
        console.log(val);
        console.log(val == 'cardview');
        console.log('cardview', this.cardviewflag);
        if(val =='cardview'){
            console.log('cardview', this.cardviewflag);
            this.cardviewflag = true;
            this.listviewflag = false;
            console.log('cardview', this.cardviewflag);
        }
        if(val == 'listview'){
            console.log('listview')
            this.listviewflag = true;
            this.cardviewflag = false;
        }
    }
    ngOnInit(){
        let selfthis = this;
        this.data.getInfo().subscribe(function(dataInfo){
            console.log(dataInfo);
            selfthis.datacontent = dataInfo;
            console.log('inside subscribe method', this.datacontent);
        })
        // setTimeout(()=>{console.log('setTimeout',this.datacontent)},1000);

        
        // console.log(this.datacontent);
    }
    ngOnChange(){
        console.log('ngOnChange this.listviewflag',this.listviewflag);
        console.log('ngOnChange this.cardviewflag',this.cardviewflag);
    }
    onpaginationclick(val){
        console.log('customers component value recieved from pagination event trigger', val)
    }
  
    age = 10;
    changeage(val){
        this.age = val;
    }
}