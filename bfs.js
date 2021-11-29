class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    //q = fifo
    let node = this.root,
      data = [],
      queue = []; //take things from beginning, and add to the end
    queue.push(node);

    while (queue.length) {
      //empty array is truthy in js so we do .length
      node = queue.shift(); //take from the beginning from queue
      data.push(node.value); //adding into our list //just to make things to see, node.value
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    //visit the entire left side and entire right side
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left); //recursively calling
      if (node.right) traverse(node.right);
    }
    traverse(current); //current is the root, user can specify a node to start from, no need to traverse from root all the time, could do traverse(this.root)
    return data;
  }

  DFSPostOrder() {
      //exact same code just different order
    let data = [];
    function traverse(node) {
      //we are going to push later
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
tree.DFSPreOrder();
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
