class CustomerOrder_1 {
    sofa;
    diningTabelSet;
    private sofaQty;
    constructor(sofaquantity){
        this.sofaQty = sofaquantity;
    }
    
    public get getSofaQty() : number {
        return this.sofaQty;
    }
    
    public set value(v : number) {
        this.sofaQty = v;
    }
}