class Producer{
    customers
    constructor(){
        this.customers = [];
    }
    add(customer){
        this.customers.push(customer);
    }
    remove(customer){
        let index = this.customers.indexOf(customer);
        this.customers.splice(index,1);
    }
    notify(){
        this.customers.forEach(item => {
            item.update('s5');
        });
    }
}
let customer1 = {
    name:'ravi',
    device:'s5',
    update:function(message){
        if(message === this.device){
            console.log('customer 1 has recieved the message', message);
        }
        
    }
}
let user = new Producer();
user.add(customer1);
user.notify();
