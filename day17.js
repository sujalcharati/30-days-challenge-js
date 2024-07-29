// task 3

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); 
console.log(stack.pop()); 
console.log(stack.size()); 
console.log(stack.isEmpty()); 

stack.clear();
console.log(stack.isEmpty()); 

// task 4
class Stack1 {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

function reverseString(input) {
    const stack = new Stack();
    let reversedString = '';

    for (let char of input) {
        stack.push(char);
    }

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); 
console.log("Reversed String:", reversedString); 
