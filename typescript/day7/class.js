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
var FountainPen = /** @class */ (function () {
    function FountainPen() {
    }
    return FountainPen;
}());
var CreatePen = /** @class */ (function () {
    function CreatePen() {
        this.penItems = ['refill', 'refill spring', 'goldplated body'];
        this.make = '';
    }
    return CreatePen;
}());
var Rotamac = /** @class */ (function (_super) {
    __extends(Rotamac, _super);
    function Rotamac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rotamac;
}(FountainPen));
var Roto = /** @class */ (function (_super) {
    __extends(Roto, _super);
    function Roto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Roto;
}(Rotamac));
var Fruits;
(function (Fruits) {
    Fruits[Fruits["apple"] = 2] = "apple";
    Fruits[Fruits["orange"] = 8] = "orange";
    Fruits[Fruits["mango"] = 9] = "mango";
})(Fruits || (Fruits = {}));
console.log(Fruits['mango']);
