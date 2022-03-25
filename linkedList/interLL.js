/*
Arrays are not always the right choice when it comes to organizing data.
The problem about arrays in js are implemented as objects, which makes it less efficient than the arrays in c and java

Lets say you operate several operations over arrays in js, you noticed that they are slow. The solution is to use LinkedList.
LL can be implemented in almost every situation a one-dimensional array 

When you need a random access, then array is a better data structure than LL.


Then, whats is LL? 
Think of them as a collection of boxes called Nodes, these boxes may have a value and might not. If the box has a value, 
then it has wire that pointed to next box in memory. 
This wire has no specific direction in the memory, it will find the next box, 
wether if the next box next to it physically or somewhere in the memory. 
If the box has no value, then it's null (nothingness).

So elements in arrays are using there position to locate them, it's like saying "hi , im at position 111 if you want me, you can 
find me there". While linkedList are wiled and dont give a shit about where they are should be in the memory 
but they are family, they are a connected in blood if you wanna find a node "some" you have to go through 
the family until you reached it.

We mark the beginning of LL with the head and the end with null


Conclusion
----------
1. nodes in ll referencing to themselves using object
2. node of ll dont care where its located in the memory
*/

// to create a ll we need 2 classes
// 1. Node: It has 2 property, value and pointer to the next node in ll
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// 2. linked list class
class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(val) {
    let currentNode = this.head;
    while (currentNode.value !== val) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // to insert a new node we have to find the node before and after
  insert(newValue, existedValue) {
    let newNode = new Node(newValue);
    let currentNode = this.find(existedValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  perviousNode(val) {
    let currentNode = this.head;
    while (!(currentNode.next === null) && currentNode.next.value !== val) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // in order to remove a node, we need to find the node before it
  // so the node before will point to the next of the removed node
  // and the removed node will point to null
  remove(val) {
    const perviousNode = this.perviousNode(val);
    if (!(perviousNode.next === null)) {
      perviousNode.next = perviousNode.next.next;
    }
  }
  display() {
    let cur = this.head;
    while (cur.next) {
      console.log(cur.next.value);
      cur = cur.next;
    }
  }
}

const ll = new LinkedList();
ll.insert("sac", "head");
ll.insert("sf", "sac");
ll.insert("ny", "sf");
console.log(" -------before--------");
ll.display();
ll.remove("ny");
console.log(" --------after---------");
ll.display();
