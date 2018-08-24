// console.log(firstName);
// console.log(numerical1);
let firstName = 'ravi';
console.log(firstName);
const numerical1 = 30;
console.log(numerical1);   
var cb = function(i){
    console.log(i)
} 
for(let i = 0 ; i < 10 ; i++){
    setTimeout(function(){
        console.log(i);
    },2000);
}