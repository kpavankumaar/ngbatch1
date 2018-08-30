class Charger{
    cabletype;
    adapter;
    constructor(type){
    
    }
    
    charging(){
        console.log(`this.cabletype ${this.cabletype}`);
    }
}

class SamsungCharger extends Charger{
    constructor(type){
        super(type);
    }

}


let typeCCharger = new SamsungCharger('typeCCable');
// typeCCharger.charging()
console.log(`typeCCharger ${typeCCharger.cabletype}`);