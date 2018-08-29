interface ParamInfo{
    value:string;
}

function run (name:string){
    console.log(name);
}
// run(10);
interface ArrValues extends Array<string | number>{
    readonly [index:number] : number | string ;

}
let arr:ArrValues = ['ravi','pavan',10];
arr.push(10);
arr[0] = 'srikanth';
let test = arr.shift();
console.log(arr);

let arr1:Array<string> = [10,20,'ravi'];

