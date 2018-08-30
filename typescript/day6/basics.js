var Charger_1 = /** @class */ (function () {
    function Charger_1() {
    }
    Charger_1.charging = function () {
        return { name: 'samsung charger' };
    };
    return Charger_1;
}());
var singletonObj = Charger_1.charging();
console.log(singletonObj);
var Charger_2 = /** @class */ (function () {
    function Charger_2(cabletype) {
        // this.cabletype = cabletype;
    }
    Charger_2.prototype.charging = function () {
        console.log("this.cabletype " + this.cabletype);
    };
    return Charger_2;
}());
var typeCCharger_1 = new Charger_2('typeCCable');
// typeCCharger.charging()
console.log("typeCCharger " + typeCCharger_1.cabletype);
