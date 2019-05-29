// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.length === 0){
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
        }
        else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
            this.length++;
        }
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            let oldTail = this.tail;
            let check = this.head;
            let found = false;
            while(!found) {
                if(check.next === oldTail) {
                    found = true;
                    check.next = null;
                    this.tail = check;
                    this.length--;
                } else {
                    check = check.next;
                }
            }
            return oldTail;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
        }
        else {
            let newHead = new Node(val);
            newHead.next = this.head;
            this.head = newHead;
            this.length++;
        }
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let oldHead = this.head;
        if(this.length === 0) return undefined;
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        else {
            this.head = this.head.next;
            this.length--;
            return oldHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        if(this.length === 0) return false;
        let current = this.head;
        while (current !== null) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length-1) return null;
        let i = 0;
        let current = this.head;
        while(i !== index) {
            i++;
            current = current.next;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(this.get(index) === null) return false;
        let targetNode = this.get(index);
        targetNode.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length-1) return false;
        if (index === 0) {
            let oldHead = this.head;
            this.head = new Node(val);
            this.head.next = oldHead;
            this.length++;
            return true;
        }
        let oldIndex = this.get(index);
        let prevNode = this.get(index-1);
        let newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = oldIndex;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index > this.length-1) return undefined;
        let removeNode = this.get(index);
        if(index === 0) {
            this.head = removeNode.next;
            this.length--;
            // return removeNode;
        }
        else if (index === this.length-1) {
            let newTail = this.get(index-1);
            this.tail = newTail;
            this.length--;
            // return removeNode;
        }
        else {
            let prev = this.get(index-1);
            prev.next = removeNode.next;
            this.length--;
        }
        return removeNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
