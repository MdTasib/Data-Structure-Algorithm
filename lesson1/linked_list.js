// Linked List code Doubly and circular Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    add(value) {
        const newNode = new Node(value);

        // this.head.next = newNode;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const list = new LinkedList(head);
list.add(30);
list.add(40);
list.add(50);
console.log(list);