class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    //Write a method that accepts a value and creates a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value){
    var newNode = new Node(value);
    if (this.head ==     null){
        this.head = newNode;
        return this;
    }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    //Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(){
        this.head = this.head.next;
    }

    //Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front(){
        console.log(this.head.value);
        return this.head.Node;
    }
}

// addFront("kelly");
var newList = new SLL;
newList.addFront("kelly").addFront("Bill");
newList.addFront("Bob");
newList.removeFront();
newList.front();
console.log(newList);