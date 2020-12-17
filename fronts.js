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

    contains(value){
        while (this.head != null){
            if(this.head.value == value){
                return true;
            }
            this.head = this.head.next;
        }
        return false;
    }
    listLength(){
        var count = 0;
        while (this.head != null){
            count += 1;
            this.head = this.head.next;
        }
        console.log(count);
        return count;
    }
    display(){
        var str = "";
        while(this.head != null){
            if (this.head.next == null){
                str += this.head.value;
                break;
            }
            else{
            str += this.head.value + ", ";
            this.head = this.head.next;
            }
        }
        console.log(str);
        return str;
    }
}

// addFront("kelly");
 var newList = new SLL;
 newList.addFront("kelly").addFront("Bill");
 newList.addFront("Bob");  
// newList.contains("kelly");
// newList.listLength();
 newList.display();