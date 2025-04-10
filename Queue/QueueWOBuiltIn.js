class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        const removedNode = this.front;
        this.front = this.front.next;
        if(this.front === null) this.rear = null;
        this.size --;
        return removedNode.data;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.front.data;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    printQueue(){
        let thisIsFront = this.front
        const elements = []
        while(thisIsFront){
            elements.push(thisIsFront.data)
            thisIsFront = thisIsFront.next
        }
        console.log(elements.join(' -> '));
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
console.log(newQueue.peek());
console.log('------------');
console.log(newQueue.getSize());
console.log('------------');
console.log(newQueue.isEmpty());
