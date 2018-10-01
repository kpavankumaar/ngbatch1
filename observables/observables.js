// let Rx = require('rxjs/Rx');
// const observable = Rx.Observable;
// observable.of(1,2,3).subscribe(item=> console.log(item));
var Producer = /** @class */ (function () {
    function Producer() {
        this.listeners = [];
    }
    Producer.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    Producer.prototype.remove = function (listener) {
        var index = this.listeners.indexof(listener);
        this.listeners.splice(index, 1);
    };
    Producer.prototype.notify = function (message) {
        this.listeners.forEach(function (listener) { listener.update(message); });
    };
    return Producer;
}());
var listener_1 = {
    name: 'ravi',
    update: function (res) {
        console.log(this.name, res);
    }
};
var listener_2 = {
    name: 'srikanth',
    update: function (res) {
        console.log(this.name, res);
    }
};
var producer1 = new Producer();
producer1.add(listener_1);
producer1.add(listener_2);
producer1.notify('new product release date on 1st oct ');
// iterator pattern 
var MultiperIterator = /** @class */ (function () {
    function MultiperIterator(arr, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.arr = arr;
        this.count = 0;
        this.divisor = divisor;
    }
    MultiperIterator.prototype.next = function () {
        while (this.count < this.arr.length) {
            if (this.arr[this.count++] % this.divisor === 0) {
                return this.arr[this.count - 1];
            }
        }
    };
    MultiperIterator.prototype.hasNext = function () {
        var countVal = this.count;
        while (countVal < this.arr.length) {
            countVal = countVal + 1;
            if (this.arr[countVal] % this.divisor === 0) {
                return true;
            }
        }
        return false;
    };
    return MultiperIterator;
}());
var arrayVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var iterator_1 = new MultiperIterator(arrayVal, 3);
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
