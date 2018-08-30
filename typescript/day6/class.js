var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Charger = /** @class */ (function () {
    function Charger(type) {
        this.cabletype = type;
    }
    Charger.prototype.charging = function () {
        console.log("this.cabletype " + this.cabletype);
    };
    return Charger;
}());
var SamsungCharger = /** @class */ (function (_super) {
    __extends(SamsungCharger, _super);
    function SamsungCharger(type) {
        return _super.call(this, type) || this;
    }
    return SamsungCharger;
}(Charger));
var typeCCharger = new SamsungCharger('typeCCable');
// typeCCharger.charging()
console.log("typeCCharger " + typeCCharger.cabletype);
