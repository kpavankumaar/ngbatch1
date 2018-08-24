// console.log(firstName);
// console.log(numerical1);
var firstName = 'ravi';
console.log(firstName);
var numerical1 = 30;
console.log(numerical1);
var cb = function (i) {
    console.log(i);
};
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 2000);
};
for (let i = 0; i < 10; i++) {
    _loop_1(i);
}
