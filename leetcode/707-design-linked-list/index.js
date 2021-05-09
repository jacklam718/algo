class MyLinkedList {
  constructor() {
    this.head = new Node(null);
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let currNode = this.head;
    for (let i = 0; i <= index; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
    this.size++;
  }

  addAtTail(val) {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(val);
    this.size++;
  };

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    const newNode = new Node(val);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    this.size--;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}