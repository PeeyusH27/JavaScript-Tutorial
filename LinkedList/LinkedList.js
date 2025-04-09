// class Node{
//     constructor(value){
//         this.data = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null
//     }
//     insertItemAtLast(value){
//         const node = new Node(value)
//         if(this.head == null) {
//             this.head = node
//         }else{
//             this.tail.next = node
//         }
//         this.tail = node;
//     }

//     insertElementAtFirst(value){
//         let node = new Node(value)
//         node.next = this.head;
//         this.head = node;
//     }

//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }


// let list = new LinkedList()
// list.insertItemAtLast(10)
// list.insertItemAtLast(20)
// list.insertItemAtLast(30)
// list.insertItemAtLast(40)
// list.insertElementAtFirst(85)
// list.insertItemAtLast(55)
// list.printList()


class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtStart(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtPosition(value, position) {
        const newNode = new Node(value)
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;
            return;
        }
        let current = this.head;
        let prev = null;
        let index = 0;
        while (current !== null && index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        if (prev) {
            prev.next = newNode;
            newNode.next = current;
        }
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// ✅ Usage
const newList = new LinkedList();
newList.insertAtEnd(10);
newList.insertAtEnd(20);
newList.insertAtEnd(30);
newList.insertAtStart(5);
newList.insertAtPosition(40, 1)
newList.printList();
