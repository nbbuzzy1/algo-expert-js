// This is an input class. Do not edit.
class Node {
	constructor(value) {
	  this.value = value;
	  this.prev = null;
	  this.next = null;
	}
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
	constructor() {
	  this.head = null;
	  this.tail = null;
	}
  
	setHead(node) {
	  // Write your code here.
		  if (this.head === null) {
			  this.head = node;
			  this.tail = node;
			  return;
		  }
		  this.head = node.value;
	}
  
	setTail(node) {
	  // Write your code here.
		  if (!this.head) {
			  this.setHead(node);
		  } else {
			  let current = this.head;
			  while (current.next) {
				  current = current.next;
			  }
			  
			  this.tail = current;
		  }
	}
  
	insertBefore(node, nodeToInsert) {
	  // Write your code here.
		  if (!this.head) {
			  this.insertHead(nodeToInsert)
		  }
		  
		  let current = this.head;
		  while (current.next.value !== node.value) {
			  current = current.next;
		  }
		  const replaced = current.next;
		  current.next = nodeToInsert;
		  nodeToInsert.prev = replaced.prev;
		  nodeToInsert.next = replaced.next;
		  replaced.prev = nodeToInsert;
	}
  
	insertAfter(node, nodeToInsert) {
	  // Write your code here.
	}
  
	insertAtPosition(position, nodeToInsert) {
	  // Write your code here.
	}
  
	removeNodesWithValue(value) {
	  // Write your code here.
	}
  
	remove(node) {
	  // Write your code here.
		  let current = this.head;
		  while (current.next.value !== node.value) {
			  current = current.next;
		  }
		  let previous = current;
		  let replacedNode = current.next;
		  let next = replacedNode.next;
		  previous.next = next;
		  next.prev = previous;
	}
  
	containsNodeWithValue(value) {
	  // Write your code here.
		  if (!this.head) {
			  return false;
		  }
		  
		  let current = this.head;
		  while (current.next) {
			  if (current.value = value) {
				  return true;
			  }
			  
			  current = current.next;
		  }
		  
		  return false;
	}
  }