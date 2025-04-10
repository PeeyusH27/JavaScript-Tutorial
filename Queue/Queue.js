class Queue{
    constructor(){
        this.items = []
    }


    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(!this.isEmpty()) this.items.shift()
    }

    front(){
       return this.isEmpty() ? -1 : this.items[0]
    }

    rear(){
        return this.items[this.items.length -1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    printQueue(){
        for(let i = 0; i < this.items.length ; i++){
            console.log(this.items[i]);
        }
    }
}


const newQueue = new Queue()
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(43)
newQueue.enqueue(36)
newQueue.enqueue(80)
newQueue.printQueue()
console.log('------------');
newQueue.dequeue()
newQueue.printQueue()
console.log('------------');
console.log(newQueue.front());
console.log(newQueue.rear());
