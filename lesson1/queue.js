// First in first out -- FIFO

class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}

const friends = new Queue();
friends.enqueue('Tasib');
friends.enqueue('Rafi');
friends.enqueue('Rakib');
console.log(friends.queue);

const removeNumber = friends.dequeue();
console.log(removeNumber);
console.log(friends.queue);