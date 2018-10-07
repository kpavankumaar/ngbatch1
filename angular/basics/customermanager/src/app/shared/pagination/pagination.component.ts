import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent {
    @Input() pageNoInfo;
    @Output() sendInfo = new EventEmitter();
    data = [1,2,3];
    constructor(){
        console.log(this.pageNoInfo);
        // this.data = this.pageNoInfo;
    }
    onclick(val){
        console.log(val);
        this.sendInfo.emit(val)
    }
}