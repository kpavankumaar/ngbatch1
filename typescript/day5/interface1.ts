interface defineObject{
    readonly x: number;
    y?: string;
    sum?():number;
    [key: string]: any
}

let obj_1: defineObject = {
    x:10,
   
    
}
obj_1.x = 34;
obj_1.y = 'ravi';
obj_1.z = 30;