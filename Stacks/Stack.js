class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0;
    }

    push(val){
        this.items.push(val)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack Underflow"
        }
        this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }

        return this.items[this.items.length - 1]
    }

    printStack(){
        for(let i = 0; i < this.items.length; i++){
            console.log(`Stack ${this.items[i]}`);
        }
    }
}


const newStack = new Stack()
newStack.push(10)
newStack.push(20)
newStack.push(30)
newStack.push(40)
newStack.push(50)
newStack.printStack()
console.log('----------------');

newStack.pop()
newStack.printStack()
console.log('----------------');
console.log(newStack.peek());
console.log('----------------');