let Rx =  require('rxjs/Rx');
const observable = Rx.Observable;
observable.of(1,2,3).subscribe(function(item){console.log(item)});
function observer (observe){
    observe.next('ravi');
    observe.next('pavan');
    observe.next('srikanth');
    observe.complete();
}
let observable_1 = observable.create(observer);
observable_1.subscribe({
    next:item=> console.log(item),
    err: err=> console.log(err),
    complete:()=> console.log('!complete')
})

let observable_2 = observable.of(1,2,3);
observable_2.subscribe((item)=>console.log(item*2));

// plain javascript 
let arr = [1,2,3,4,5]
let arr_1 = arr.map(i => i*2)
console.log(arr_1);
// observable
let observable_3 = observable.range(1,5).map(i => i*3).subscribe(i=> console.log('subscribed info',i));
let A$= observable.interval(200).map(i => `A${i}`);
let B$= observable.interval(100).map(i => `B${i}`);
observable.merge(A$,B$).subscribe(i => console.log(i))
