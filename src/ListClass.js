import Node from "./NodeClass";
import { printResult } from "./DomStuff";

export default class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  // Insert at the end
  append(value) {
    const node = new Node(value);

    // If empty create head and tail else update the tail
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.nextNode = node;
      this._tail = this._tail.nextNode
    }

    this._size += 1;
    document.dispatchEvent(new Event('listModified'));
  }

  // Insert at start
  prepend(value) {
    if (!this._head) {
      this._head = new Node(value, this._head);
      this._tail = this._head;
    } else {
      this._head = new Node(value, this._head);
    }

    this._size += 1;
    document.dispatchEvent(new Event('listModified'));
  }

  size() {
    console.log(this._size);
  }

  head() {
    return this._head.value;
  }

  tail() {
    return this._tail.value;
  }

  // Return node at index
  at(index) {
    let current = this._head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count += 1;
      current = current.next;
    }

    return null;
  }

  pop() {
    let current = this._head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this._tail = current
    this._size -= 1;

    document.dispatchEvent(new Event('listModified'));
  }

  // Returns true if the value exist in the list
  contains(value) {
    if (this.find(value) === null) {
      return false;
    }
    return true;
  }

  // Returns the index of the node containing value
  find(value) {
    let current = this._head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode
      index += 1;
    }
    return null;
  }

  toString() {
    let current = this._head;
    let string = ''
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return string + 'null';
  }

  // Insert at index
  insertAt(value, index) {
    //  If index is out of range
    if (index > 0 && index > this._size) {
      return;
    }

    // If first index or list empty
    if (index === 0 || !this._head) {
      this.prepend(value);
      return;
    } else if (index === this._size) {
      //If insert after tail
      this.append(value);
      return;
    }

    const node = new Node(value);
    let current;
    let previous;

    // Set current to head
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count += 1;
      current = current.nextNode; // Node after index
    }

    node.nextNode = current;
    previous.nextNode = node;

    document.dispatchEvent(new Event('listModified'));
    this._size += 1;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index >= this._size) {
      return;
    }

    let current = this._head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this._head = current.nextNode;
    } else if (index === (Number(this._size - 1))) {
      //If remove last
      this.pop();
    }else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
    }
    
    document.dispatchEvent(new Event('listModified'));
    this._size -= 1;
  }

  // clearList() {
  //   this._head = null;
  //   this._size = 0;
  // }

}
