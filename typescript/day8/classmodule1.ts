// class Furniture{
//     sofa:'string';
//     diningTabelSet:'string';

// }
// module CustomerOrders{
    class CustomerOrder1 {
        sofa;
        diningTabelSet;
        protected sofaQty;
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
// }
    class CustomerOrder2 extends CustomerOrder1{
        protected sofaQty;
        constructor(quantity){
            super(quantity);
        }
    }
let sofaOrder = new CustomerOrder1(4);
sofaOrder.value = 6;
sofaOrder.sofaQty
console.log(sofaOrder.getSofaQty);
let CustomerOrder_2 = new CustomerOrder2(10);
CustomerOrder_2.sofaQty