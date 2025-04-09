class Stack {
    constructor() {
        this.items = {};
        this.top = -1
    }

    isEmpty() {
        return this.top === -1;
    }


    push(val) {
        this.top++
        this.items[this.top] = val
    }


    pop(){
        if(this.isEmpty()){
            return "Stack Underflow"
        }
        const popped = this.items[this.top]
        delete this.items[this.top]
        this.top --;
        return popped
    }


    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack[this.top];
    }
    

    printStack() {
        for (let i in this.items) {
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

// newStack.pop()
// newStack.printStack()
// console.log('----------------');
// console.log(newStack.peek());
// console.log('----------------');