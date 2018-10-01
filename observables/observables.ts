// let Rx = require('rxjs/Rx');
// const observable = Rx.Observable;
// observable.of(1,2,3).subscribe(item=> console.log(item));

class Producer {
    listeners;
    constructor(){
        this.listeners = [];
    }
    add(listener){
        this.listeners.push(listener);
    }
    remove(listener){
        let index = this.listeners.indexof(listener);
        this.listeners.splice(index,1);
    }
    notify(message){
        this.listeners.forEach((listener) =>{listener.update(message)})
    }
}
let listener_1 = {
    name:'ravi',
    update:function(res){
        console.log(this.name , res);
    }
}
let listener_2 = {
    name:'srikanth',
    update:function(res){
        console.log(this.name , res);
    }
}
let producer1 = new Producer();
producer1.add(listener_1);
producer1.add(listener_2);

producer1.notify('new product release date on 1st oct ');

// iterator pattern 

class MultiperIterator {
    arr;
    divisor;
    count;
    constructor(arr, divisor = 1){
        this.arr = arr;
        this.count = 0;
        this.divisor = divisor;
    }
    next(){
        while(this.count < this.arr.length){
            if(this.arr[this.count++] % this.divisor === 0){
                return this.arr[this.count-1];
            }
        }
    }
    hasNext(){
        let countVal = this.count;
        while(countVal < this.arr.length ){
            countVal = countVal + 1;
            if(this.arr[countVal] % this.divisor === 0){
                return true;
            }
        }
        return false;
    }
}

var arrayVal = [1,2,3,4,5,6,7,8,9,10];
let iterator_1 = new MultiperIterator(arrayVal,3);

console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());