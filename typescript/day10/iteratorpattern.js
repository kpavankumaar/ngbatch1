var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SelectingNumbers = /** @class */ (function () {
    function SelectingNumbers(arr, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.cursor = 0;
        this.arr = arr;
        this.divisor = divisor;
    }
    SelectingNumbers.prototype.next = function () {
        console.log(this.cursor < this.arr.length);
        while (this.cursor < this.arr.length) {
            console.log(this.arr[this.cursor] % this.divisor === 0);
            if (this.arr[this.cursor] % this.divisor === 0) {
                // console.log(`needed value from array  ${this.arr[this.cursor]}`)
                var item = this.arr[this.cursor];
                this.cursor++;
                return item;
            }
        }
    };
    SelectingNumbers.prototype.hasNext = function () {
        while (this.cursor < this.arr.length) {
            if (this.arr[this.cursor++] % this.divisor === 0) {
                return true;
            }
            return false;
        }
    };
    return SelectingNumbers;
}());
var findingEvenNumbers = new SelectingNumbers(arr, 2);
console.log(findingEvenNumbers.next());
