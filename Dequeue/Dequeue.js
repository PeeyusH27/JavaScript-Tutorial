class Dequeue{
    constructor(){
        this.items = []
    }

    addFront(element) {
        this.items.unshift(element)
    }

    addRear(element) {
        this.items.push(element)
    }

    removeFront(){
        this.items.shift()
    }

    removeRear() {
        this.items.pop()
    }

    isEmpty(){
        return this.size() === 0;
    }

    peekFront(){
        return this.items[0]
    }

    peekRear(){
        return this.items[this.items.length - 1]
    }

    size(){
        return this.items.length
    }
    
    display(){
        console.log(this.items.join(' - '));
    }
}

const newDq = new Dequeue()
newDq.addFront(10)
newDq.addFront(20)
newDq.addFront(30)
newDq.display()
console.log('---------------');
newDq.addRear(40)
newDq.addRear(50)
newDq.display()
console.log('---------------');
console.log(newDq.peekFront())
console.log(newDq.peekRear())
newDq.removeFront()
newDq.removeRear()
newDq.display()
console.log('---------------');
console.log(newDq.isEmpty())
console.log(newDq.size())
newDq.display()
console.log('---------------');