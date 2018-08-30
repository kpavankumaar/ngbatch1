const obj = {};
obj.firstName = 'pavan';
console.log(obj);
obj = 10;

// arrow or lambda function 
let nameOfPerson= (firstname, lastname) => {
    console.log(firstname + lastname);
    return 10 ;
};
console.log(nameOfPerson('ravi','kumar'));

interface userInfo{
    (a:string, b:string):string
}

let userDetails:userInfo = function(name,email) {
    return 10;
}
userDetails('ravi', 'ravi@gmail.com');

let  multiply = (num1: number ,num2:number) =>  num1 * num2;
console.log(multiply(19, 10));

