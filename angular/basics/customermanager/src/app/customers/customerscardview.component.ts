import { Component, Input, OnInit, OnChanges } from "@angular/core";

@Component({
    selector: 'app-customerscardview',
    templateUrl: 'customerscardview.component.html'
})
export class CustomersCardViewComponent implements OnChanges{
    @Input() datainfo;
    temp;
    constructor(){
        console.log(this.datainfo);
    }
    // ngOnInit(){
    //         console.log('ngOnInit',this.datainfo);
    // }
    ngOnChanges(){
        console.log('ngOnChanges',this.datainfo);
        this.temp = 10;
        console.log('ngOnChanges this.temp value ',this.temp);
       
        
    }
    // ngDoCheck(){
    //     console.log('ngDoCheck',this.datainfo);
    // }
    // ngAfterContentInit(){
    //     console.log('ngAfterContentInit',this.datainfo);
    //     console.log('ngAfterContentInit this.temp value ',this.temp);
    // }
    // ngAfterContentChecked(){
    //     console.log('ngAfterContentChecked',this.datainfo);
    // }
    // ngAfterViewInit(){
    //     console.log('ngAfterViewInit',this.datainfo);
    // }
    // ngAfterViewChecked(){
    //     console.log('ngAfterViewChecked',this.datainfo);
    // }
}