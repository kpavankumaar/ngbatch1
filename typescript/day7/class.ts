interface Pen {
    type:string

}
interface BallPen extends Pen{
    penItems:string [];
}

interface Make {
    make?:string;
}
class FountainPen implements Pen{
    type
}


class CreatePen implements BallPen, Make{
    penItems = ['refill','refill spring','goldplated body'];    
    type: 'clickable pen';
    make = ''
    constructor(){
        
    }
}

class Rotamac extends FountainPen {

}
class Roto extends Rotamac{

}
enum Fruits{
    apple = 2,
    orange = 8 ,
    mango 

}
console.log(Fruits['mango']);