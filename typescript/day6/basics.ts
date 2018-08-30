class Charger_1{
    static charging(){
        return {name:'samsung charger'}
    }
}

let singletonObj = Charger_1.charging();
console.log(singletonObj);
class Charger_2{
    // cabletype:string;
    adapter;
    constructor(public cabletype){
        // this.cabletype = cabletype;
    }
    
    charging(){
        console.log(`this.cabletype ${this.cabletype}`);
    }
}

let typeCCharger_1 = new Charger_2('typeCCable');
// typeCCharger.charging()
console.log(`typeCCharger ${typeCCharger_1.cabletype}`);