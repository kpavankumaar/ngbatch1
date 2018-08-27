const obj = {};
obj.firstName = 'pavan';
console.log(obj);
obj = 10;

// arrow or lambda function 
let nameOfPerson = (firstname, lastname) => {
    console.log(firstname + lastname);
    return 10 ;
};
console.log(nameOfPerson('ravi','kumar'));

interface userInfo{

}

function userDetails(name, email){

}

let  multiply = (num1: number ,num2:number) =>  num1 * num2;
console.log(multiply(19, 10));

