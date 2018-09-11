var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SelectingNumbers = /** @class */ (function () {
    function SelectingNumbers(arr, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.cursor = 0;
        this.arr = arr;
        this.divisor = divisor;
    }
    SelectingNumbers.prototype.next = function () {
        while (this.cursor < this.arr.length) {
            var item = this.arr[this.cursor];
            if (this.arr[this.cursor] % this.divisor === 0) {
                // console.log(`needed value from array  ${this.arr[this.cursor]}`)
                // this.cursor++;
                return item;
            }
            this.cursor++;
        }
    };
    SelectingNumbers.prototype.hasNext = function () {
        while (this.cursor < this.arr.length) {
            this.cursor++;
            if (this.arr[this.cursor] % this.divisor === 0) {
                return true;
            }
        }
        return false;
    };
    return SelectingNumbers;
}());
var findingEvenNumbers = new SelectingNumbers(arr, 2);
console.log(findingEvenNumbers.next(), findingEvenNumbers.hasNext());
console.log(findingEvenNumbers.next(), findingEvenNumbers.hasNext());
console.log(findingEvenNumbers.next(), findingEvenNumbers.hasNext());
console.log(findingEvenNumbers.next(), findingEvenNumbers.hasNext());
console.log(findingEvenNumbers.next(), findingEvenNumbers.hasNext());
