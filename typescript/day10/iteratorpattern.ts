let arr = [1,2,3,4,5,6,7,8,9]

class SelectingNumbers {
    cursor;
    divisor;
    arr;
    constructor(arr,divisor = 1){
        this.cursor = 0;
        this.arr = arr;
        this.divisor = divisor;
    }
    next(){
        console.log(this.cursor < this.arr.length);
        while(this.cursor < this.arr.length){
            console.log(this.arr[this.cursor] % this.divisor === 0);
            if(this.arr[this.cursor] % this.divisor === 0){
                // console.log(`needed value from array  ${this.arr[this.cursor]}`)
                let item = this.arr[this.cursor]
                this.cursor++;
                return item;
            }
            
        }
    }
    hasNext(){
        while(this.cursor < this.arr.length){
            if(this.arr[this.cursor++] % this.divisor === 0){
                return true;
            }
            return false;
        }
    }
}

let findingEvenNumbers = new SelectingNumbers(arr,2)
console.log(findingEvenNumbers.next() );